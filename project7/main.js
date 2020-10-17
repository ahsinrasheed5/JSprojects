// Using selector inside the Element

const questions = document.querySelectorAll(".question");
		// console.log(questions);
		questions.forEach(function(question){
		// console.log(question);
		const btn = question.querySelector(".question-btn");
		btn.addEventListener("click",function(){
			questions.forEach(function(item){
				if(item !== question){
					item.classList.remove("show-text");
				}
			});
			question.classList.toggle("show-text");
		})
	})
	
// Traversing the DOM 

// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function(btn){

// 	btn.addEventListener("click",function(e){
// 		console.log(e.currentTarget.parentElement.parentElement);
// 		const question = e.currentTarget.parentElement.parentElement;

// 		question.classList.toggle("show-text");


// 	})

// })