const headerHTML = `
    <header>
        <div class="header-container container">
            <div class="logo">
                <img src="images/logo.png" alt="Geneva Soccer Logo" />
                <h1>Geneva Soccer</h1>
            </div>
            
            <button class="nav-toggle">☰</button>
            
            <nav id="main-nav">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    
                    <li class="dropdown">
                        <a href="#youth-soccer" class="dropdown-toggle">Youth Soccer</a>
                        <ul class="dropdown-menu">
                            <li><a href="rec-soccer.html">Rec</a></li>
                            <li><a href="travel-soccer.html">Travel</a></li>
                        </ul>
                    </li>
                    
                    <li class="dropdown">
                        <a href="#about" class="dropdown-toggle">About</a>
                        <ul class="dropdown-menu">
                            <li><a href="board.html">Board</a></li>
                            <li><a href="mission.html">Mission</a></li>
                        </ul>
                    </li>
                    
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#coaches">Coaches</a></li>
                    
                    <li class="dropdown">
                        <a href="#rules-resources" class="dropdown-toggle">Rules & Resources</a>
                        <ul class="dropdown-menu">
                            <li><a href="#rec-rules">Rec Rules</a></li>
                            <li><a href="#travel-rules">Travel Rules</a></li>
                        </ul>
                    </li>
                    
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
`;

document.getElementById("header-container").innerHTML = headerHTML;