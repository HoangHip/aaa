const view = {

}

view.showComponents = function (name) {
    switch (name) {
        case 'jobList': {
            document.getElementById('app').innerHTML = components.jobList
            model.loadJobs()

            let profileBtn = document.getElementById('profile')
            let messagesBtn = document.getElementById('messages')
            let signOutBtn = document.getElementById('sign-out')
            let form = document.getElementById('form-finding')

            profileBtn.onclick = function () {
                // view.showComponents('profile')
            }
            messagesBtn.onclick = function () {
                view.showComponents('chat')
            }
            signOutBtn.onclick = function () {
                // firebase.auth().signOut()
            }
            form.onsubmit = function (e) {
                e.preventDefault()
                let value = form.search.value

                if (value) {
                    let newJobList = []
                    model.jobList.forEach((jl) => {
                        if (jl.content.position.toLowerCase() == value.toLowerCase()) {
                            newJobList.push(jl)
                        }
                    })
                    if (newJobList) {
                        view.showJob(newJobList)
                    }
                }

            }

            // choice-btn
            function defaultChoiceBtn(name) {
                let choice = document.getElementById(name)
                choice.onclick = function () {
                    form.search.value = name
                }
            }
            defaultChoiceBtn('tester')
            defaultChoiceBtn('full-stack')
            defaultChoiceBtn('front-end')
            defaultChoiceBtn('back-end')
            defaultChoiceBtn('game')

            // reset home-btn
            let homeBtn = document.getElementById('home-btn')
            homeBtn.onclick = function () {
                view.showComponents('jobList')
            }


            break
        }
        case 'jobDetail': {
            model.loadUser(model.jobDetail.company_name)
            console.log(model.jobDetail.company_name)

            setTimeout(() => {
                let html = view.setJobDetail()
                document.getElementById('app').innerHTML = html

                let profileBtn = document.getElementById('profile')
                let messagesBtn = document.getElementById('messages')
                let signOutBtn = document.getElementById('sign-out')

                profileBtn.onclick = function () {
                    // view.showComponents('profile')
                }
                messagesBtn.onclick = function () {
                    view.showComponents('chat')
                }
                signOutBtn.onclick = function () {
                    // firebase.auth().signOut()
                }

                let applyBtn = document.getElementById('apply-btn')
                let homeBtn = document.getElementById('home-btn')

                homeBtn.onclick = function () {
                    view.showComponents('jobList')
                }
                applyBtn.onclick = function () {
                    // do something

                    alert('Apply successfully, please wait for responding!')
                }
            }, 500);

            break
        }
        case 'chat': {
            document.getElementById('app').innerHTML = components.chat
            let user = {
                email: 'chumanhhailtt@gmail.com',
                pasword: 'hahaha'
            }
            model.login(user)
            model.loadConversations(user.email)

            let profileBtn = document.getElementById('profile')
            let messagesBtn = document.getElementById('messages')
            let signOutBtn = document.getElementById('sign-out')
            let homeBtn = document.getElementById('home-btn')

            profileBtn.onclick = function () {
                // view.showComponents('profile')
            }
            messagesBtn.onclick = function () {
                view.showComponents('chat')
            }
            signOutBtn.onclick = function () {
                // firebase.auth().signOut()
            }
            homeBtn.onclick = function () {
                view.showComponents('jobList')
            }

            let form = document.getElementById('form-chat')
            form.onsubmit = function (e) {
                e.preventDefault()
                let content = form.message.value
                form.reset()
                model.createMessage(content)
            }




            break
        }
    }
}

view.showJob = function (docs) {
    document.getElementById('job-list').innerHTML = ''
    if (docs) {
        docs.forEach((doc) => {
            let html = `
            <div class="col-sm-4 col-lg-3" id="${doc.id}">
                    <div class="card">
                        <h6 class="mb-0">${doc.company_name}</h6>
                        <img src="./img/company-img.webp" alt="" class="card-img-top">
                        <hr class="w-70">
                        <div class="card-body">
                            <h5 class="card-title text-danger">${doc.content.title}</h5>
                            <h6 class="text-info">${doc.content.salary}</h6>
                            <h6 class="text-info">${doc.content.location}</h6>
                            <p class="card-text">${doc.content.discribe}</p>
                        </div>
                    </div>
            </div>
            `
            document.getElementById('job-list').innerHTML += html
        })

        docs.forEach((doc) => {
            let job = document.getElementById(doc.id)
            job.onclick = function () {
                model.jobDetail = doc
                view.showComponents('jobDetail')
            }
        })
    }
}

view.setJobDetail = function () {
    let html = `
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
        <a href="#" class="navbar-brand">
            <h3 id="home-btn">LOGO</h3>
        </a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#main-nav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main-nav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <i class="fas fa-user-circle fa-3x nav-link"></i>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown">
                        User-name
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#" id="profile">Profile</a>
                        <a class="dropdown-item" href="#" id="messages">Messages</a>
                        <a class="dropdown-item" href="#" id="sign-out">Sign out</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </nav>
    <br>
    <div class="container">
        <div class="row text-center">
            <div class="col-md-4">
                <img src="./img/company-img.webp" class="img-fluid">
                <h4 id="company-name">${model.jobDetail.company_name}</h4>
                <hr>
                <h5 class="text-danger">Information</h5>
                <p class="text-left">${model.employerUser.information.introduction}</p>
            </div>
            <div class="col-md-8">
                <h1 class="display-4 text-danger">${model.jobDetail.content.title}</h1>
                <div class="text-muted text-left my-3">
                    <h4 id="money">
                        <i class="fas fa-dollar-sign"></i>
                        <span>: ${model.jobDetail.content.salary}</span>
                    </h4>
                    <h4 id="location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>: ${model.jobDetail.content.location}</span>
                    </h4>
                </div>
                <div class="content">
                    <h2>The Job</h2>
                    <p class="text-left">${model.jobDetail.content.content}</p>
                </div>
                <button class="btn btn-success" id="apply-btn">Apply Now!</button>
            </div>
        </div>
    </div>
    `
    return html
}

view.addMessage = function (messageInfo) {
    if (messageInfo.owner && messageInfo.content) {
        let className = 'chat-message'

        if (messageInfo.owner == model.authUser.email) {
            className += ' your'
        }

        let html = `
        <div class="${className}">
            <span>${messageInfo.content}</span>
        </div>
        `

        let chatContent = document.getElementById('chat-content')
        chatContent.innerHTML += html
        view.scollToBottom('chat-content')
    }
}

view.clearMessages = function () {
    document.getElementById('chat-content').innerHTML = ''
}

view.listConversations = function (conversations) {
    // save old active-conversation
    let activeLi = document.getElementsByClassName('active-conversation')
    let activeLiId = null
    if (activeLi.length) {
        activeLiId = activeLi[0].id
    }
    // delete old conversation list
    let list = document.getElementById('conversation-list')
    list.innerHTML = ''

    if (conversations) {
        for (let conversation of conversations) {
            for (let user of conversation.users_Info) {
                if (user.email != model.authUser.email) {
                    let html = `
                    <div id="${conversation.id}">
                        <span>${user.name}</span>
                    </div>
                    `
                    list.innerHTML += html
                    break
                }
            }
        }

        if (activeLiId) {
            document.getElementById(activeLiId).classList.add('active-conversation')
        }

        for (let conversation of conversations) {
            let li = document.getElementById(conversation.id)
            li.onclick = function () {
                let oldLi = document.getElementsByClassName('active-conversation')
                if (oldLi.length) {
                    oldLi[0].classList.remove('active-conversation')
                }

                model.setCurrentActiveConversation(conversation)
                view.setDetails(conversation)
                li.classList.add('active-conversation')
            }
        }
    }
}

view.setDetails = function (conversation) {
    let details = document.getElementById('conversation-detail')
    details.innerHTML = ''
    firebase.firestore()
        .collection('post')
        .where('content.title', '==', conversation.title)
        .get().then((snapshot) => {
            let doc = snapshot.docs[0].data()
            let html = `
            <h4 class="text-danger text-center">${doc.content.title}</h4>
            <div class="text-muted my-3">
                <div id="money">
                    <i class="fas fa-dollar-sign"></i>
                    <span>: ${doc.content.salary}</span>
                </div>
                <div id="location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>: ${doc.content.location}</span>
                </div>
            </div>
            <p>${doc.content.discribe}</p>
            `
            details.innerHTML = html
        })
}

view.clearDetails = function () {
    document.getElementById('conversation-detail').innerHTML = ''
}

view.scollToBottom = function (id) {
    let element = document.getElementById(id)
    element.scrollTop = element.scrollHeight - element.clientHeight
}