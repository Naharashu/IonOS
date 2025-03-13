document.addEventListener("DOMContentLoaded", function() {
  const input = document.getElementById("input");
  const output = document.getElementById("output");
  
  // Завантаження збережених даних з localStorage
  let ionPorInstalled = JSON.parse(localStorage.getItem("IonPorInstalled")) || false;
  let ionInstalled = JSON.parse(localStorage.getItem("IonInstalled")) || false;
  let username = "User";
  
  const maxStorage = 5000;
  let Storage = parseInt(localStorage.getItem("Storage")) || 120;
  const sizeIonPort = 310;
  const sizeIon = 579;
  
  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const command = input.value.trim();
      processCommand(command);
      input.value = "";
      input.focus();
    }
  });
  
  function printOutput(text, delay = 0) {
    setTimeout(() => {
      output.innerHTML += text + "\n";
      output.scrollTop = output.scrollHeight;
    }, delay);
  }
  
  function processCommand(command) {
    command = command.trim().toLowerCase();
    let response = "";
    
    if (command === "help") {
      response = "Enabled commands:\n- help – list of commands\n- clear – clear terminal\n- launch base.fpp/base_portable.fpp – lauch scripts\n- sudo – launch commands as administrator(help sudo for details)\n- info – information about system\n- date – current date\n- exit – exit from terminal";
    } else if (command === "clear") {
      output.innerHTML = "";
      return;
    } else if (command === "about") {
      response = "Це псевдо-ОС, створена за допомогою HTML, CSS і JS.";
    } else if (command === "sudo install") {
      response = "type 'sudo install ionos' or 'sudo install ionos: portable'";
    } else if (command === "launch base_portable.fpp") {
      if (ionPorInstalled) {
        printOutput("- Booting IonOS Portable...", 0);
        setTimeout(() => location.href = "/launched_p.html", 17000);
      } else {
        response = "IonOS Portable is not installed. Type 'sudo install ionos: portable'.";
      }
    } else if (command === "info") {
      response = `- Username: ${username}\n- Storage: ${Storage}MB/${maxStorage}MB\n- Terminal Version: prerelease 1.0B`;
    }
    else if (command === "sudo install ionos: portable") {
      if (!ionPorInstalled) {
        printOutput("- Installing IonOS Portable...", 0);
        setTimeout(() => {
          printOutput("[■□□□□□□□□□] Copying files...", 3000);
        }, 5000);
        setTimeout(() => {
          printOutput("[■■□□□□□□□□] Setting up system files...", 9000);
        }, 9000);
        setTimeout(() => {
          printOutput("[■■■□□□□□□□] Installing dependencies...", 13000);
        }, 13000);
        setTimeout(() => {
          printOutput("[■■■■□□□□□□] Configuring system...", 18000);
        }, 18000);
        setTimeout(() => {
          printOutput("[■■■■■□□□□□] Optimizing performance...", 22000);
        }, 22000);
        setTimeout(() => {
          printOutput("[■■■■■■□□□□] Finalizing installation...", 25000);
        }, 25000);
        setTimeout(() => {
          ionPorInstalled = true;
          localStorage.setItem("IonPorInstalled", JSON.stringify(true)); // Зберігаємо значення
          Storage += sizeIonPort;
          localStorage.setItem("Storage", Storage.toString()); // Оновлюємо Storage
          printOutput("[■■■■■■■■■■] Installation complete!", 30000);
        }, 30000);
      } else {
        response = "You already installed IonOS Portable. Type 'launch base_portable.fpp'.";
      }
    }
    else if (command === "sudo install ionos") {
      if (!ionInstalled) {
        printOutput("- Installing IonOS...", 0);
        setTimeout(() => printOutput("[■□□□□□□□□□] Copying files...", 5000), 5000);
        setTimeout(() => printOutput("[■■■□□□□□□□] Setting up system...", 9000), 9000);
        setTimeout(() => printOutput("[■■■□□□□□□□] Installing dependencies...", 13000), 13000);
        setTimeout(() => printOutput("[■■■■□□□□□□] Configuring system...", 19000), 19000);
        setTimeout(() => printOutput("[■■■■■■□□□□] Installing drivers...", 26000), 26000);
        setTimeout(() => printOutput("[■■■■■■■■□□] Finalizing installation...", 34000), 34000);
        setTimeout(() => {
          ionInstalled = true;
          localStorage.setItem("IonInstalled", JSON.stringify(true)); // Зберігаємо значення
          Storage += sizeIon;
          localStorage.setItem("Storage", Storage.toString()); // Оновлюємо Storage
          printOutput("[■■■■■■■■■■] Installation complete!", 40000);
        }, 40000);
      } else {
        response = "- You already installed IonOS. Type 'launch base.fpp'.";
      }
    }
    else if (command === "launch base.fpp") {
      if (ionInstalled) {
        printOutput("- Booting IonOS...", 0);
        setTimeout(() => location.href = "/launched.html", 16000);
      } else {
        response = "IonOS is not installed. Type 'sudo install ionos'.";
      }
    } else if (command === "help sudo") {
      response = "[SYSTEM]: sudo runs commands as administrator\n- sudo install - install something..";
    }
    else if (command === "date") {
  response = `Current date and time: ${new Date().toLocaleString()}`;
}
    else if (command === "exit") {
      response = "Good luck, see you later.."
      setTimeout(() => location.reload(), 3500)
    }
    else {
      response = "Команда не знайдена. Введіть 'help' для списку команд.";
    }
    
    if (response) {
      output.innerHTML += `$ ${command}\n${response}\n`;
      output.scrollTop = output.scrollHeight;
    }
  }
});