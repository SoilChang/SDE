var list=[
	{
		name: "explanation",
		picture: "/images/yongningward/yongNingWard.png",
		title:"Yong Ning Ward",
		content:"Tang Chang’an (CE 618-906) was perhaps the foremost city in the world during its time. At its peak the city had a population of about a million. It extended its influence to many Asian cities during that period. A number of 7th- and 8th-century Japanese cities and 5 capitals of Bohai (a thriving kingdom which existed from CE 698 to 926 in the northeastern part of today’s China) were found to be modeled after it."
	}
];


var len = list.length;
// loop through each item in the fixtures
for(var i=0; i<len; i++){
	var object = Yongning.findOne({name: list[i].name });
	if(!object){
		// if cannot find anything
		Yongning.insert(list[i]);
	}else{
		// if found
		Yongning.remove({_id: object._id});
		_.extend( list[i],{_id:object._id});
		Yongning.insert(list[i]);
	}
}
