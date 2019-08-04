const model = {
    authUser: null,
    employerUser: null,

    jobList: [],
    jobDetail: null,

    authUser: null,
    conversations: null,
    currentActiveConversations: null
}

// post-collection
model.loadJobs = function () {
    firebase.firestore()
        .collection('post')
        .orderBy('createdAt')
        .onSnapshot((snapshot) => {
            let docChanges = snapshot.docChanges()
            if (!model.jobList[0]) {
                // the first load
                docChanges.forEach((docChange) => {
                    let post = docChange.doc.data()
                    post.id = docChange.doc.id
                    model.jobList.push(post)
                })
            }
            view.showJob(model.jobList)
        })
}

// user-collection
model.loadUser = function (name) {
    firebase.firestore()
        .collection('user')
        .where('information.company_name', '==', name)
        .get().then((snapshot) => {
            let docs = snapshot.docs
            if (docs) {
                model.employerUser = docs[0].data()
            }
        })
}

// conversations-collection
model.login = function (authUser) {
    model.authUser = authUser
    model.conversations = null
    model.currentActiveConversations = null
}

model.loadConversations = function (email) {
    firebase.firestore()
        .collection('convesations')
        .where('users', 'array-contains', email)
        .orderBy('upToDate')
        .onSnapshot((snapshot) => {
            if (!model.conversations) {
                // first load
                model.conversations = snapshot.docChanges().map((docChange) => {
                    let conversation = docChange.doc.data()
                    conversation.id = docChange.doc.id
                    return conversation
                })

                model.conversations.reverse()
                console.log(model.conversations[1])

                if (model.conversations) {
                    model.setCurrentActiveConversation(model.conversations[0])
                }

                // view.listConversations(model.conversations)
            } else {
                // change load
                for (let docChange of snapshot.docChanges()) {
                    if (docChange.type == 'modified') {
                        let conversation = docChange.doc.data()
                        conversation.id = docChange.doc.id

                        let foundIndex = model.conversations.findIndex((cvst) => {
                            return cvst.id == conversation.id
                        })
                        if (foundIndex >= 0) {
                            model.conversations.splice(foundIndex, 1) // delete the element of array
                            model.conversations.unshift(conversation) // add element to the first of array
                        }


                        if (model.currentActiveConversations
                            && model.currentActiveConversations.id == conversation.id) {
                            model.setCurrentActiveConversation(conversation)
                        }
                    }

                    // added
                    if (docChange.type == 'added') {
                        let conversation = docChange.doc.data()
                        conversation.id = docChange.doc.id
                        // add conversation to the first of array
                        model.conversations.unshift(conversation)

                        model.setCurrentActiveConversation(conversation)
                        // view.listConversations(model.conversations)
                    }
                }

            }
            view.listConversations(model.conversations)
        })
}

model.setCurrentActiveConversation = function (conversation) {
    model.currentActiveConversations = conversation
    view.clearMessages()

    if (conversation.messages) {
        for (let message of conversation.messages) {
            view.addMessage(message)
        }
    }
}

model.createMessage = function (content) {
    let message = {
        owner: model.authUser.email,
        content: content,
        createAt: new Date().toISOString()
    }

    firebase.firestore()
        .collection('convesations')
        .doc(model.currentActiveConversations.id)
        .update({
            messages: firebase.firestore.FieldValue.arrayUnion(message),
            upToDate: new Date().toISOString()
        })
}

model.clear = function () {
    model.authUser = null
    model.conversations = null
    model.currentActiveConversations = null
}

model.addConversation = function (conversation) {
    firebase.firestore()
        .collection('conversations')
        .add(conversation)
}


