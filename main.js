let $FindBlocks;
let $fieldGame;


//Сортировка по возростанию
function DrawArray() 
{
	if($FindBlocks==null ){ 
		$FindBlocks = document.getElementsByClassName("block");
	}
	if($fieldGame==null ){ 
		$fieldGame= document.getElementById("field");
	}
	
	for(let i =0;i<$FindBlocks.length;i++){
		for(let j=0;j<$FindBlocks.length-i;j++){
			if($FindBlocks[j].innerText == String( i+1)){
				let NEWelement = $FindBlocks[j];
				$FindBlocks[j].parentNode.removeChild($FindBlocks[j]);
				$fieldGame.appendChild (NEWelement);
				break;  
			}
		}
	}
	
	
}
//Рандомное создание чисел в рандомном месте
function RandomArray()
{
	if($FindBlocks==null ){ 
		$FindBlocks = document.getElementsByClassName("block");
	}
	if($fieldGame==null ){ 
		$fieldGame= document.getElementById("field");
	}
	
	//удаление прошлых элементов
	for(let i =0 ;i <$FindBlocks.length ;){
		$FindBlocks[0].parentNode.removeChild($FindBlocks[0]);
	}
	//Создание новых
	let end = GetRandom(1,100);
	
	let ArrayNumbers = new Array;
	for(let i =1; i < end+1 ;i++){
		ArrayNumbers[i] = i;
	}
	for(let i =0; i < end ;i++){
		let $elementBlock = CreatElement("div","block");
		let RandomNumber = GetRandom(0,ArrayNumbers.length-1)
		$elementBlock.innerText = ArrayNumbers[RandomNumber];
		ArrayNumbers.splice(RandomNumber,1);
		let r =GetRandom(1,255);
		let g =GetRandom(1,255);
		let b =GetRandom(1,255);
		let color =  '#' + r.toString(16) + g.toString(16) + b.toString(16);
		$elementBlock.style.background = color;
		$fieldGame.appendChild ($elementBlock);
	}
}
//Создание элементов внутри HTML
function CreatElement ( Element, ClassElementa ){
	const $AddElement = document.createElement(Element);
	if (ClassElementa){ $AddElement.classList.add(ClassElementa);};
	return $AddElement;
};
//Создание рандом чисел
function GetRandom(minValue,maxValue) {
	return (Math.ceil(Math.random() * (maxValue - minValue))+ minValue);
};
//Создание элементов внутри HTML
function CreatElement ( Element, ClassElementa ){
	const $AddElement = document.createElement(Element);
	if (ClassElementa){ $AddElement.classList.add(ClassElementa);};
	return $AddElement;
};
