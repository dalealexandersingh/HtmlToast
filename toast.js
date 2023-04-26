

function ShowToastInfo(message){
	AddToast(message, "toast-info");
}

function ShowToastError(message){
	AddToast(message, "toast-error");
}

function ShowToastWarn(message){
	AddToast(message, "toast-warn");
}

function AddToast(message, className){
	
	if (!window.ToastMessages) {
		window.ToastMessages = [];
	}
	
	window.ToastMessages.push({message: message, className: className})
	
	if (!window.ToastTimer) {
		var toast = window.ToastMessages.pop();
		ShowToast(toast.message, toast.className);
		window.ToastTimer = setInterval(function() {
			if (window.ToastMessages.length > 0) {
				var toast = window.ToastMessages.pop();
				ShowToast(toast.message, toast.className);
			}
			if (window.ToastMessages.length == 0) {
				clearInterval(window.ToastTimer);
				window.ToastTimer = null;
			}
		}, 2000);
	}

}

function ShowToast(message, className){

	if (window.Toast) {
		document.body.removeChild(window.Toast);
	}

	window.Toast = document.createElement('div');
	window.Toast.innerHTML = message;
	window.Toast.className = "toast " + className;
	document.body.appendChild(window.Toast);
}
