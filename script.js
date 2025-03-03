document.addEventListener("DOMContentLoaded", function() {
  const input = document.getElementById("input");
  const output = document.getElementById("output");
  
let ionPorInstalled = false; 
let ionInstalled = false;
let username = "User";
const maxStorage = 5000
let Storage = 120
const sizeIonPort = 310
const sizeIon = 579
  
  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const command = input.value.trim();
      processCommand(command);
      input.value = "";
      input.focus(); // Повертаємо фокус
    }
  });
  
  function printOutput(text, delay) {
    setTimeout(() => {
      output.innerHTML += text + "\n";
      output.scrollTop = output.scrollHeight;
    }, delay);
  }
  
  function processCommand(command) {
    command = command.trim().toLowerCase();
    let response = "";
    
    if (command === "help") {
      response = "Доступні команди:\n- help (показати команди)\n- clear (очистити термінал)\n- about (інформація про цю 'ОС')\n- launch (запуск ОС)\n- sudo - запуск адмін команд(детальніше help sudo)\n- info - інформація про систему";
    } else if (command === "clear") {
      output.innerHTML = "";
      return;
    } else if (command === "about") {
      response = "Це псевдо-ОС, створена за допомогою HTML, CSS і JS.";
    }
      else if (command === "sudo install") {
        response = "type sudo install IonOS or IonOS: portable"
      }
      
    else if (command === "launch base_portable.fpp") {
      if (ionPorInstalled) {
        printOutput("- Booting IonOS Portable...", 0);
        printOutput("[■□□□□□□□□□] Initializing...", 1000);
        printOutput("[■■□□□□□□□□] Loading system core...", 3000);
        printOutput("[■■■□□□□□□□] Checking dependencies...", 5000);
        printOutput("[■■■■□□□□□□] Mounting virtual disk...", 7000);
        printOutput("[■■■■■□□□□□] Configuring settings...", 9000);
        printOutput("[■■■■■■□□□□] Loading drivers...", 11000);
        printOutput("[■■■■■■■□□□] Finalizing startup...", 13000);
        printOutput("[■■■■■■■■■■] System ready!", 15000);
        
        setTimeout(() => location.href = "/launched_p.html", 17000);
      } else {
        response = "IonOS Portable is not installed. Type 'sudo install IonOS: portable'.";
      }
    }
    else if (command === "info") {
      response = `- Username: ${username}\n- Storage: ${Storage}MB/${maxStorage}MB\n- Terminal Version: prerelease 1.0`
    }
    else if (command === "sudo install ionos: portable") {
      if (!ionPorInstalled) {
        printOutput("- Installing IonOS Portable...", 0);
        printOutput("[■□□□□□□□□□] Copying files...", 5000);
        printOutput("[■■□□□□□□□□] Setting up system files...", 9000);
        printOutput("[■■■□□□□□□□] Installing dependencies...", 13000);
        printOutput("[■■■■□□□□□□] Configuring system...", 18000);
        printOutput("[■■■■■□□□□□] Optimizing performance...", 22000);
        printOutput("[■■■■■■□□□□] Finalizing installation...", 28000);
        printOutput("[■■■■■■■■■■] Installation complete!", 30000);
        Storage = Storage + sizeIonPort
        setTimeout(() => { ionPorInstalled = true; }, 15000);
      } else {
        output.innerHTML += "You already installed IonOS portable version, now type 'launch base_portable.fpp'"
      }
    } 
        else if (command === "sudo install ionos") {
      if (!ionInstalled) {
        printOutput("- Installing IonOS...", 0);
        printOutput("[■□□□□□□□□□] Copying files...", 5000);
        printOutput("[■■■□□□□□□□] Setting up system...", 9000);
        printOutput("[■■■□□□□□□□] Installing dependencies...", 13000);
        printOutput("[■■■■□□□□□□] Configuring system...", 19000);
        printOutput("[■■■■■■□□□□] Installation drivers...", 26000);
        printOutput("[■■■■■■■■□□] Finalizing installation...", 34000);
        printOutput("[■■■■■■■■■■] Installation complete!", 40000);
        Storage = Storage + sizeIon
        setTimeout(() => { ionInstalled = true; }, 15000);
      } else {
        output.innerHTML += "- You already installed IonOS, now type 'launch base.fpp'";
      }
     }
    else if (command === "launch base.fpp") {
      printOutput("- Booting IonOS...", 0);
      printOutput("[■□□□□□□□□□] Initializing system...", 1000);
      printOutput("[■■□□□□□□□□] Loading kernel...", 2500);
      printOutput("[■■■□□□□□□□] Mounting disk...", 4500);
      printOutput("[■■■■□□□□□□] Checking dependencies...", 6500);
      printOutput("[■■■■■□□□□□] Applying settings...", 8500);
      printOutput("[■■■■■■□□□□] Starting services...", 10500);
      printOutput("[■■■■■■■□□□] Loading user session...", 12500);
      printOutput("[■■■■■■■■■■] System ready!", 14000);
      
      setTimeout(() => location.href = "/launched.html", 16000);
    }
    else if (command === "help sudo") {
      response = "[SYSTEM]:sudo is run commands as administrator\n- sudo install - install something.."
    }
    else {
      response = "Команда не знайдена. Введіть 'help' для списку команд.";
    }
    
    output.innerHTML += `$ ${command}\n${response}\n`;
    output.scrollTop = output.scrollHeight;
  }
});