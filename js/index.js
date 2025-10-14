var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('siteUrl');
var tbody = document.getElementById('tbody')
var books = [];
if(localStorage.getItem('booksData')){
    books = JSON.parse(localStorage.getItem('booksData'));
    displayBook();
}

function createBookmark(event){
    event.preventDefault();
    if (siteName.value.trim() === '' || siteUrl.value.trim() === '') {
        showAlert();
        return; 
      }
    var book ={
        site_name : siteName.value ,
        site_Url : siteUrl.value 
    }  

    books.push(book);
    localStorage.setItem('booksData' , JSON.stringify(books));
    displayBook();
    clearInputs();
  

}

function clearInputs(){
    siteName.value='';
    siteUrl.value='';
}

function displayBook(){
    var cartona='';
    for(var i=0; i<books.length; i++){
        cartona+=`<tr>
          <td>${i+1}</td>
          <td>${books[i].site_name}</td>
          <td><button class=" btn btn-success"><a class="non" target="_blank" href="${books[i].site_Url}"><i class="fa-solid fa-eye pe-4"></i>Visit</a></button></td>
          <td><button onclick="deleteBook(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can pe-4"></i>Delete</button></td>
        </tr> `
    }
    tbody.innerHTML=cartona;
}

function deleteBook(elementIndex){
    books.splice(elementIndex , 1)
    localStorage.setItem('booksData' , JSON.stringify(books));
    displayBook();
} 

function showAlert(){
     document.getElementById('overlay').style.display = 'block';
    
}

function closeAlert(){
    document.getElementById('overlay').style.display = 'none';
}