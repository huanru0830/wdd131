function isCardNumberValid(number) {
  return number === '1234 5678 9101 1020';
}

function displayError(msg) {
  document.querySelector('.errorMsg').innerHTML = msg;
}

function submitHandler(event) {
  event.preventDefault();
  let errorMsg = '';


  const cardNumber = document.getElementById('cardNumber').value.trim();
  const cardHolder = document.getElementById('cardHolder').value.trim();
  const expMonth = document.getElementById('expMonth').value.trim();
  const expYear = document.getElementById('expYear').value.trim();
  const cvc = document.getElementById('cvc').value.trim();


  displayError('');


  const cardNumberPattern = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
  if (!cardNumberPattern.test(cardNumber)) {
    errorMsg += "Card number must be in format '1234 5678 9101 1020'<br>";
  } else if (!isCardNumberValid(cardNumber)) {
    errorMsg += "Card number is not a valid card number<br>";
  }


  if (cardHolder.length < 2) {
    errorMsg += "Card holder name is required<br>";
  }


  const monthNum = parseInt(expMonth, 10);
  const yearNum = parseInt(expYear, 10);
  const now = new Date();
  let validDate = false;
  if (!/^\d{2}$/.test(expMonth) || monthNum < 1 || monthNum > 12) {
    errorMsg += "Expiration month must be 01-12<br>";
  }
  if (!/^\d{2}$/.test(expYear)) {
    errorMsg += "Expiration year must be two digits<br>";
  }

  if (/^\d{2}$/.test(expMonth) && /^\d{2}$/.test(expYear) && monthNum >= 1 && monthNum <= 12) {
    let fullYear = 2000 + yearNum;
    let expDate = new Date(fullYear, monthNum - 1, 1);
    let lastDate = new Date(fullYear, monthNum, 0);
    let today = new Date(now.getFullYear(), now.getMonth(), 1);
    if (lastDate >= today) validDate = true;
    else errorMsg += "Expiration date must be in the future<br>";
  }


  if (!/^\d{3}$/.test(cvc)) {
    errorMsg += "CVC/CVV must be 3 digits<br>";
  }

  if (errorMsg !== '') {
    displayError(errorMsg);
    return false;
  } else {
    displayError("Form submitted! (demo, not really submitted)");
    return true;
  }
}

document.querySelector('#credit-card').addEventListener('submit', submitHandler);
