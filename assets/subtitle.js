const subtitles = [
    "Welcome to Nugget Proxy!",
    "Games, apps and settings is coming soon",
    "Made By xdevman9",
    "A cool fancy proxy",
    "Unblock sites at your school",
    "Make sure no teacher behind you!",
    "Want more link? Click the discord button",
    "https://discord.gg/2rEh5cmT6p",
    "Deploy ur own at: github.com/xdevman9/Nugget-proxy",
    "Do you like nugget!",
    "Panic key is: P",
    "I know you!!!",
    "I have your IP!",
    "Have any suggestion let us know discord server!",
    "Nugget uses ChemicalJS",
    "Are you new to our nugget?",
    "Idk what i am doing",
    "Did you know: The longest English word is 189,819 letters long",
    "Snakes can predict earthquakes. 💀",
    "How do trees get on the Internet?   They Login LOLLL 🤣",
    "What computers like to eat?   Chips HAHHAAH",
    "Are the jokes funny?",
    "What is a computer’s first sign of old age?  Loss of memory",
    "Beep bop beep bop beep bop I am a robot 🤖",
    "I think i know you!",
    "YOU WON A $1M, CONGRATS",
    "School sucks",
    "TEACHER BEHIND YOU ALERT ⚠️",
    "You have been set to free",
  ];
  

  function displaySubtitle() {
    const subtitleContainer = document.createElement("div");
    subtitleContainer.className = "subtitle";
    subtitleContainer.innerText = subtitles[Math.floor(Math.random() * subtitles.length)];
  
    document.body.appendChild(subtitleContainer);
  
    
    const subtitleWidth = subtitleContainer.offsetWidth;
  

    subtitleContainer.animate(
      [
        { transform: `translateX(-${subtitleWidth}px)`, opacity: 1 },
        { transform: `translateX(calc(100vw + ${subtitleWidth}px))`, opacity: 0 }, 
      ],
      {
        duration: 7000,
        easing: "ease-in-out",
        iterations: 1,
        fill: "forwards",
      }
    );
  

    setTimeout(() => {
      subtitleContainer.remove();
    }, 5000);
  }
  

  window.onload = displaySubtitle;
  
