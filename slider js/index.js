let quotes = [
    "Educate, Agitate, Organize. ~BR Ambedkar" ,
    "I measure the progress of a community by the degree of progress which women have achieved. ~BR Ambedkar",
    "Cultivation of mind should be the ultimate aim of human existence. ~BR Ambedkar",
    "The progress of any society depends on the progress of its weakest sections. ~BR Ambedkar",
    "Indifferentism is the worst kind of disease that can affect people. ~BR Ambedkar",
    "I like the religion that teaches liberty, equality, and fraternity. ~BR Ambedkar",
    "The progress of any society can be measured by how it treats its women and children. ~BR Ambedkar",
    "The ultimate goal of the human being is to help others and make this world a better place ~BR Ambedkar"
]

function slider() {
    let textElements = document.getElementById("quotes");
      textElements.innerText = quotes[Math.floor(Math.random() * quotes.length)];
    
  }
  
  setInterval(() => {
    slider();
  }, 3000);
