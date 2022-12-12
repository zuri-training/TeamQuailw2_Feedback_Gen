// Array
const optionlist = [];

let surveyDataList = [];

// function for adding question
const holder = document.getElementById('optionlist');

const showlist = () => {
    holder.innerHTML = '';
    for (i = 0; i < optionlist.length; i++) {
        holder.innerHTML = holder.innerHTML + '<input class="form-check-input" type="checkbox"> <label class="form-check-label" for="option">' + optionlist[i] + '</label><br>'
    }
}
showlist();
const optionWritten = document.getElementById('choice')

const addOptions = () => {
    if (optionlist.length <= 2) {
        optionlist.push(optionWritten.value)
        showlist()
    } else {
        document.getElementById('max').innerHTML = '<p style=" color:red;"> You can only add 3 Options</p>'
    }
    console.log(optionlist)
    
}
const queswritten = document.getElementById('question')
// creating object
const questionForm = {
    ques: null,
    option1: null,
    option2: null,
    option3: null,
}
const DataStorage =() =>{
    if(localStorage.getItem('surveyData') == null) {
        localStorage.setItem('surveyData', JSON.stringify(surveyDataList)) 
    } else{
        surveyDataList = JSON.parse(localStorage.getItem('surveyData'))
    }
    
}
DataStorage()

const addButton = () => {
    
        optionlist.unshift(queswritten.value)
        console.log(optionlist)
        localStorage.setItem('OptionData', JSON.stringify(optionlist))
    
        let nQues = Object.create(questionForm)
        nQues.ques = optionlist[0]
       nQues.option1 = optionlist[1]
       nQues.option2 = optionlist[2]
       nQues.option3 = optionlist[3]
      
    
        surveyDataList.push(nQues)
    //surveryData is the important storage
        localStorage.setItem('surveyData', JSON.stringify(surveyDataList))
        loadQues()
        location.reload(); 
}


const loadQues = () => {
    const fetchedData = JSON.parse(localStorage.getItem('surveyData'))
   let result = fetchedData.map((data,idx) =>{
    return `  <div class="container-fluid d-flex justify-content-center">
    <div class="body">
        <div class="m-2">
            <h4 id="myQuestion" class="my-3"> ${data.ques}</h4>
            <input class="form-check-input mb-1" type="checkbox" id="choiceOne">
            <label class="form-check-label" for="choiceOne">${data.option1}</label><br>
            <input class="form-check-input mb-1" type="checkbox" id="choiceTwo">
            <label class="form-check-label" for="choiceTwo">${data.option2}</label><br>
            <input class="form-check-input mb-1" type="checkbox" id="choiceThree">
            <label class="form-check-label" for="choiceThree">${data.option3}</label><br>
            <div class="divider d-flex align-items-center my-4"></div>
            <button type="button" class="btn btn-danger m-2"
            onclick="deletionAlert(${idx})">Delete</button>
        </div>
    </div>
</div>`
   })
document.getElementById('questionslist').innerHTML = result;
}
loadQues()

const deleteQues = (idx) =>{
    surveyDataList.splice(idx,1)
    localStorage.setItem('surveyData', JSON.stringify(surveyDataList));
}

const deletionAlert = (idx) =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            deleteQues(idx)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
        location.reload();
      })
}
