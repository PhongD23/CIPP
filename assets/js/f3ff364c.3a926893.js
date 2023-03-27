"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[9569],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=o.createContext({}),l=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||c;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,r=new Array(c);r[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<c;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},381:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=n(7462),i=n(3366),c=(n(7294),n(3905)),r=["components"],s={id:"conditionalaccess",title:"Conditional Access Best Practices",description:"Setup your Conditional Access policies for CIPP.",slug:"/gettingstarted/postinstall/conditionalaccess"},a=void 0,l={unversionedId:"gettingstarted/postinstall/conditionalaccess",id:"gettingstarted/postinstall/conditionalaccess",title:"Conditional Access Best Practices",description:"Setup your Conditional Access policies for CIPP.",source:"@site/docs/user/gettingstarted/postinstall/conditionalaccess.md",sourceDirName:"gettingstarted/postinstall",slug:"/gettingstarted/postinstall/conditionalaccess",permalink:"/docs/user/gettingstarted/postinstall/conditionalaccess",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/user/gettingstarted/postinstall/conditionalaccess.md",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1679916951,formattedLastUpdatedAt:"27/03/2023",frontMatter:{id:"conditionalaccess",title:"Conditional Access Best Practices",description:"Setup your Conditional Access policies for CIPP.",slug:"/gettingstarted/postinstall/conditionalaccess"},sidebar:"userSidebar",previous:{title:"SAM Wizard",permalink:"/docs/user/gettingstarted/postinstall/samwizard"},next:{title:"Post-Install Configuration",permalink:"/docs/user/gettingstarted/postinstall/addingusers"}},u={},p=[{value:"Conditional Access best practices",id:"conditional-access-best-practices",level:2},{value:"Setup of your conditional access policies",id:"setup-of-your-conditional-access-policies",level:3},{value:"Setup of clients conditional access policies",id:"setup-of-clients-conditional-access-policies",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,r);return(0,c.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"conditional-access-best-practices"},"Conditional Access best practices"),(0,c.kt)("p",null,"To make sure CIPP is able to access your tenants securely we recommend the usage of Conditional Access. Both your, and your clients Conditional Access Policies will need to be configured for optimal usage."),(0,c.kt)("h3",{id:"setup-of-your-conditional-access-policies"},"Setup of your conditional access policies"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"Browse to the ",(0,c.kt)("a",{parentName:"li",href:"https://portal.azure.com/#view/Microsoft_AAD_ConditionalAccess/ConditionalAccessBlade/~/Policies"},"Conditional Access Policies")," blade in Azure."),(0,c.kt)("li",{parentName:"ol"},"Exclude the CIPP service account from ",(0,c.kt)("strong",{parentName:"li"},"each")," existing policy."),(0,c.kt)("li",{parentName:"ol"},"Create a new policy and include the CIPP user. Enforce Azure Multi-factor Authentication for each logon, each application."),(0,c.kt)("li",{parentName:"ol"},'Save this policy under the name "CIPP Conditional Access Policy"')),(0,c.kt)("h3",{id:"setup-of-clients-conditional-access-policies"},"Setup of clients conditional access policies"),(0,c.kt)("p",null,"DAP and GDAP are affected by your clients conditional access policies. To make sure you can access your clients using your CIPP integration user we recommend excluding the MSP from the Conditional Access Policy per ",(0,c.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/partner-center/gdap-faq#what-is-the-recommended-next-step-if-the-conditional-access-policy-set-by-the-customer-blocks-all-external-access-including-csps-access-aobo-to-the-customers-tenant"},"Microsoft's Documentation")),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"Browse to your client's ",(0,c.kt)("a",{parentName:"li",href:"https://portal.azure.com/#view/Microsoft_AAD_ConditionalAccess/ConditionalAccessBlade/~/Policies"},"Conditional Access Policies")," blade in Azure."),(0,c.kt)("li",{parentName:"ol"},'For each policy listed. Add an exclusion to "Users and Groups" with the following settings:',(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre"},"  - Guest or external users\n      - Service Provider Users\n      -  Selected, enter your tenantid. If you do not know what your tenant id is you can look this up at https://whatismytenantid.com\n")))))}f.isMDXComponent=!0}}]);