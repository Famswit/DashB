const sideMenu = document.querySelector(".left_nav");
const closeBtn = document.querySelector(".close_btn");
const menuIcon = document.querySelector(".menu_icon");
const themeToggler = document.querySelector(".toggler");
const loginLink = document.querySelector(".log_btn");
const inputUsername = document.querySelector(".add_username");
const inputPswd = document.querySelector(".add_password");
const logout = document.querySelector("#logoutbtn");
const customerPage = document.querySelector(".customer");



menuIcon.addEventListener('click', ()=> {
    sideMenu.style.display ='block';
})

closeBtn.addEventListener('click', ()=> {
    sideMenu.style.display ='none';
})

//change theme
themeToggler.addEventListener('click', ()=> {
    document.body.classList.toggle('dark-theme-variables')

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');


    console.log('femi')
})

// filling orders inside the table
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td class="${order.shipping === 'Declined' ? 'danger': 
                    order.shipping === 'pending' ? 'warning' : 'primary'}">${order.paymentStatus}</td>
                        <td class="primary">${order.Details}</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})


// login page link

loginLink.addEventListener("click", redirect);

function redirect(e)
{
    if(inputUsername.value === '' || inputPswd.value === '' ){
        alert('enter a username or password')
    }
    else {
        window.location = "index.html";
        document.write('Please wait... redirecting');
        setTimeout('redirect()', 1000);


      
}
 event.preventDefault();
  // storing into web browser

  localStorage.setItem('TheUser', inputUsername.value);
  localStorage.setItem('ThePassword', inputPswd.value);

}

// logout page
logout.addEventListener("click", logoutRedirect);

function logoutRedirect(){
    window.location.replace("login.html");
}

customerPage.addEventListener("click", pageCustomer);


function pageCustomer(){
    window.location = "customer.html"
    setTimeout('logoutRedirect', 1000);
}