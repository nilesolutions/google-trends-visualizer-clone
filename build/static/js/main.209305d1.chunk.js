(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},15:function(e){e.exports=["mandrill","ground hog","chimpanzee","squirrel","panther","warthog","kitten","wolf","monkey","ferret","anteater","coyote","polar bear","zebra","mountain goat","vicuna","horse","dromedary","puma","ape","canary","steer","guinea pig","wombat","opossum","deer","kangaroo","jaguar","seal","okapi","leopard","walrus","gorilla","crocodile","eagle owl","thorny devil","parrot","chameleon","budgerigar","lamb","alpaca","dingo","eland","baboon","mongoose","donkey","cheetah","camel","marmoset","chipmunk","antelope","beaver","silver fox","capybara","lovebird","aardvark","ibex","dog","waterbuck","bald eagle","cat","gila monster","duckbill platypus","buffalo","starfish","pronghorn","mouse","orangutan","shrew","ocelot","weasel","bear","chinchilla","lemur","musk-ox","hartebeest","grizzly bear","dormouse","gemsbok","meerkat","bumble bee","doe","fox","marten","llama","argali","porpoise","bat","finch","chamois","bull","lizard","coati","fawn","hyena","parakeet","yak","pony","woodchuck","peccary","cow","ewe","ox","ermine","skunk","goat","sheep","raccoon","rooster","salamander","hamster","alligator","colt","bison","frog","giraffe","hedgehog","crow","guanaco","jackal","rat","lion","gnu","rhinoceros","puppy","gazelle","bighorn","mule","mink","panda","octopus","aoudad","basilisk","badger","ram","lynx","prairie dog","dugong","elk","snake","porcupine","springbok","burro","mustang","oryx","otter","pig","blue crab","stallion","gopher","impala","bunny","dung beetle","fish","tiger","hog","wildcat","mole","tapir","hare","turtle","addax","quagga","koala","civet","iguana","jerboa","snowy owl","muskrat","rabbit","mare","elephant","hippopotamus","wolverine","boar","cougar","zebu","mynah bird","whale","musk deer","reindeer","highland cow","chicken","armadillo","sloth","newt","moose","toad"]},16:function(e){e.exports=["#4285F4","#34A853","#EA4335","#FABB05"]},17:function(e){e.exports=["top","right","bottom","left"]},18:function(e){e.exports=[150,200,225,250]},20:function(e,t,a){e.exports=a(37)},26:function(e,t,a){},27:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),l=(a(10),a(1)),s=a(2),c=a(4),u=a(3),d=a(5),m=a(15),h=a(16),p=a(17),g=a(18),b=a(19),f=(a(26),a(27),a(8)),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleType=function(){var e=a.props,t=e.animal,n=e.speed,r=e.nextCard,o=a.state.text;setTimeout(function(){a.setState({text:t.substring(0,o.length+1)})},n),o!==t?setTimeout(a.handleType,n):setTimeout(r,2500)},a.state={text:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.handleType()}},{key:"render",value:function(){var e=this.props.color;return r.a.createElement("div",{className:"card",style:{background:e}},r.a.createElement("a",{className:"typing fade-in",target:"_blank",href:"https://youtu.be/dQw4w9WgXcQ?t=42",rel:"noopener noreferrer"},r.a.createElement("span",null,this.state.text),r.a.createElement("span",{id:"cursor"})))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).nextCard=function(){var e=a.props,t=e.animals,n=e.colors,r=e.id,o=e.transitions,i=e.typingSpeed,l=Object(b.a)({},a.state.card),s=Math.floor(Math.random()*t.length);s===l.animalIndex&&0!==s?s-=1:0===s&&(s+=2);var c=t[s],u=Math.floor(Math.random()*n.length),d={animal:c,animalIndex:s,color:n[u],colorIndex:u,id:r+" "+c,transition:o[Math.floor(Math.random()*o.length)],speed:i[Math.floor(Math.random()*i.length)]};a.setState({card:d})},a.state={duration:1e3,cards:[],card:{}},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.animals,a=e.colors,n=e.id,r=e.transitions,o=e.typingSpeed,i=Math.floor(Math.random()*t.length),l=t[i],s=Math.floor(Math.random()*a.length),c=a[s],u=n+" "+l,d=o[Math.floor(Math.random()*o.length)],m={animal:l,animalIndex:i,color:c,colorIndex:s,id:u,transition:r[Math.floor(Math.random()*r.length)],speed:d};this.setState({card:m,id:n})}},{key:"render",value:function(){var e=this.state.card;return r.a.createElement(f.TransitionGroup,{component:"div",id:e.id,className:"tile"},r.a.createElement(f.CSSTransition,{in:!0,key:e.id,timeout:500,classNames:e.transition,unmountOnExit:!0,mountOnEnter:!0},r.a.createElement(v,{animal:e.animal,color:e.color,speed:e.speed,nextCard:this.nextCard})))}}]),t}(n.Component),k=function(){return r.a.createElement("a",{className:"logo",href:"https://trends.google.com/trends/hottrends/visualize?pn=p1&nrow=5&ncol=5"},r.a.createElement("b",{className:"logoBold"},"Google"),"Trends")},w=function(e){var t=e.setGrid,a=e.dim;return r.a.createElement("div",{className:"square",title:a[0]+"x"+a[1],dim:a,onClick:function(){return t(a)}})},x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={hover:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"renderSquares",value:function(){for(var e=this.props.setGrid,t=0,a=[];t<5;){for(var n=0,o=[];n<5;){var i=[t+1,n+1];o.push(r.a.createElement(w,{key:i,setGrid:e,dim:i})),n++}a.push(o),t++}var l=[].concat.apply([],a);return r.a.createElement("div",{className:"gridChooser"},l)}},{key:"handleEnter",value:function(){this.setState({hover:!0})}},{key:"handleLeave",value:function(){this.setState({hover:!1})}},{key:"render",value:function(){var e=this,t={width:this.state.hover?120:30,height:this.state.hover?120:30};return r.a.createElement("div",{className:"squareContainer",style:t,onMouseEnter:function(){return e.handleEnter()},onMouseLeave:function(){return e.handleLeave()}},this.renderSquares())}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).setGrid=function(e){a.setState({rows:e[0],columns:e[1]})},a.state={colors:[],animals:[],typingSpeed:[],rows:"",columns:"",transitions:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.setState({animals:m,colors:h,transitions:p,typingSpeed:g,rows:5,columns:5})}},{key:"renderGrid",value:function(){for(var e=this.state,t=e.colors,a=e.animals,n=e.rows,o=e.columns,i=e.transitions,l=e.typingSpeed,s={width:"100%",height:"100%",display:"grid",gridTemplateRows:"repeat(".concat(n,", calc(100vh / ").concat(n,"))")},c={display:"grid",gridTemplateColumns:"repeat(".concat(o,", calc(100vw / ").concat(o,"))")},u=0,d=[];u<n;){for(var m=0,h=[];m<o;){var p=u+"-"+m;h.push(r.a.createElement(y,{id:p,key:p,animals:a,transitions:i,colors:t,typingSpeed:l})),m++}d.push(h),u++}return r.a.createElement("div",{className:"grid",style:s},d.map(function(e,t){return r.a.createElement("div",{key:t,className:"row",style:c},e)}))}},{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement(x,{setGrid:this.setGrid}),r.a.createElement(k,null),this.renderGrid())}}]),t}(n.Component);i.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.209305d1.chunk.js.map