(this.webpackJsonpitalian_recipes=this.webpackJsonpitalian_recipes||[]).push([[0],{23:function(e,a,t){e.exports=t(34)},28:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(15),i=t.n(c),r=t(16),s=t(17),m=t(21),o=t(18),p=t(7),u=t(22),h=(t(28),function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("h3",{className:"container__title"},e.mealName),l.a.createElement("img",{className:"container__img",src:e.mealImage,alt:e.mealName}))}),f=t(8),d=function(e){return l.a.createElement("div",{className:"wrapper"},l.a.createElement("ul",{className:"list"},e.allRecipes.filter((function(a){return""===e.value||a.strMeal.toLowerCase().includes(e.value.toLowerCase())})).map((function(e){return l.a.createElement("li",{className:"list__item",key:e.idMeal},l.a.createElement(f.b,{to:"/recipe/".concat(e.idMeal),className:"list__button"},l.a.createElement(h,{mealImage:e.strMealThumb,mealName:e.strMeal,id:e.idMeal})))}))))},E=function(e){return l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",{className:"title__list"},"Italian Recipes"),l.a.createElement("form",{className:"form"},l.a.createElement("label",{className:"form__label"},"Search "),l.a.createElement("input",{type:"text",onChange:function(a){e.handleChange(a.target.value)},name:"recipe",value:e.value,placeholder:"Ej. Budino Di Ricotta"})))},v=function(e){return console.log(e),l.a.createElement("div",{className:"wrapper__info"},l.a.createElement("h1",{className:"wrapper__info--title"},e.recipe.strMeal),l.a.createElement("img",{className:"wrapper__info--img",src:e.recipe.strMealThumb,alt:e.recipe.strMeal}),l.a.createElement("p",{className:"wrapper__info--instructions"},e.recipe.strInstructions))},g=t(5),_=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).handleChange=t.handleChange.bind(Object(p.a)(t)),t.renderRecipeInfo=t.renderRecipeInfo.bind(Object(p.a)(t)),t.fetchSingleRecipe=t.fetchSingleRecipe.bind(Object(p.a)(t)),t.state={value:"",allRecipes:[],singleRecipe:{}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian").then((function(e){return e.json()})).then((function(a){e.setState({allRecipes:a.meals})}))}},{key:"fetchSingleRecipe",value:function(e){var a=this;e!==this.state.singleRecipe.idMeal&&function(e){return fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+e).then((function(e){return e.json()}))}(e).then((function(e){a.setState({singleRecipe:e.meals[0]})}))}},{key:"handleChange",value:function(e){this.setState({value:e})}},{key:"renderRecipeInfo",value:function(e){return this.fetchSingleRecipe(e.match.params.id),l.a.createElement(v,{recipe:this.state.singleRecipe})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(g.c,null,l.a.createElement(g.a,{path:"/",exact:!0},l.a.createElement(E,{handleChange:this.handleChange}),l.a.createElement(d,{allRecipes:this.state.allRecipes,value:this.state.value})),l.a.createElement(g.a,{path:"/recipe/:id",render:this.renderRecipeInfo})))}}]),a}(l.a.Component);i.a.render(l.a.createElement(f.a,null,l.a.createElement(_,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.ab851982.chunk.js.map