import{d as a}from"./vuedraggable.umd-6fd06559.js";import{_ as s,br as o,U as t,a2 as e,Y as l,Q as n,X as r,J as i,a7 as d,Z as c,$ as g}from"./index-bae9a161.js";const p=["vue.draggable","draggable","component","for","vue.js 2.0","based","on","Sortablejs"],u={class:"row"},m={class:"col-2"},b={class:"col-6"},f={class:"list-group-item"},h=["onClick"];const v=s({name:"transition-example-2",display:"Transitions",order:7,components:{draggable:a},data:()=>({list:p.map(((a,s)=>({name:a,order:s+1}))),drag:!1}),methods:{sort(){this.list=this.list.sort(((a,s)=>a.order-s.order))}},computed:{dragOptions:()=>({animation:200,group:"description",disabled:!1,ghostClass:"ghost"})}},[["render",function(a,s,p,v,y,x){const j=o("draggable"),k=o("rawDisplayer");return t(),e("div",u,[l("div",m,[l("button",{class:"btn btn-secondary button",onClick:s[0]||(s[0]=(...a)=>x.sort&&x.sort(...a))}," To original order ")]),l("div",b,[s[4]||(s[4]=l("h3",null,"Transition",-1)),n(j,i({class:"list-group",tag:"transition-group","component-data":{tag:"ul",type:"transition-group",name:y.drag?null:"flip-list"},modelValue:y.list,"onUpdate:modelValue":s[1]||(s[1]=a=>y.list=a)},x.dragOptions,{onStart:s[2]||(s[2]=a=>y.drag=!0),onEnd:s[3]||(s[3]=a=>y.drag=!1),"item-key":"order"}),{item:r((({element:a})=>[l("li",f,[l("i",{class:d(a.fixed?"fa fa-anchor":"glyphicon glyphicon-pushpin"),onClick:s=>a.fixed=!a.fixed,"aria-hidden":"true"},null,10,h),c(" "+g(a.name),1)])])),_:1},16,["component-data","modelValue"])]),n(k,{class:"col-3",value:y.list,title:"List"},null,8,["value"])])}]]);export{v as default};
