const components = {
}

components.jobList = `
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
<div class="jumbotro">
    <div class="container">
        <div class="row text-center">
            <div class="col-md-9 col-lg-6">
                <div class="finding">
                    <div class="display-4 text-white mb-3 recuitment">Recuitment</div>
                    <form id="form-finding">
                        <div class="form-group">
                            <input type="search" name="search" class="form-control" placeholder="Search for more infomation">
                        </div>
                        <button class="btn btn-warning">Search</button>
                    </form>
                    <div class="example">
                        <button class="btn btn-outline-light" id="tester">Tester</button>
                        <button class="btn btn-outline-light" id="full-stack">Full stack</button>
                        <button class="btn btn-outline-light" id="front-end">Front-end</button>
                        <button class="btn btn-outline-light" id="back-end">Back-end</button>
                        <button class="btn btn-outline-light" id="game">Game</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="row text-center job-list" id="job-list">

    </div>
</div>
`

components.jobDetail = `
<nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
        <a href="#" class="navbar-brand">
            <h3>LOGO</h3>
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
            <h4 id="company-name">Company name</h4>
            <hr>
            <h5 class="text-danger">Information</h5>
            <p class="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has survived not only five centuries
            </p>
        </div>
        <div class="col-md-8">
            <h1 class="display-4 text-danger">Senior Java Developer</h1>
            <div class="text-muted text-left my-3">
                <h4 id="money">
                    <i class="fas fa-dollar-sign"></i>
                    <span>: 200$ - 300$</span>
                </h4>
                <h4 id="location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>: Ha Noi</span>
                </h4>
            </div>
            <div class="content">
                <h2>The Job</h2>
                <p class="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.</p>
            </div>
            <button class="btn btn-success">Apply Now!</button>
        </div>
    </div>
</div>
`

components.chat = `
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
<div class="container">
    <div class="row py-4 chat-screen">
        <div class="col-sm-4 col-lg-3">
            <div class="conversation-list text-center" id="conversation-list">
                
            </div>
        </div>
        <div class="col-sm-8 col-lg-6">
            <div class="chat-container">
                <h3 class="mb-4 text-center">Chat Room</h3>
                <div class="chat-content" id="chat-content">
                    
                </div>
                <form action="" id="form-chat">
                    <div class="form-group">
                        <input type="text" class="form-control" name="message">
                    </div>
                    <button class="btn btn-outline-success">Send</button>
                </form>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="conversation-detail p-2" id="conversation-detail">
                
            </div>
        </div>
    </div>
</div>
`