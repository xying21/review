(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[397],{8670:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var n=t(2122),l=t(9756),r=(t(7294),t(3905)),i=["components"],o={id:"quickstart",title:"ckb-sdk-java"},p={unversionedId:"javasdk/quickstart",id:"javasdk/quickstart",isDocsHomePage:!1,title:"ckb-sdk-java",description:"This guide will walk you through setting up a Gradle project to develop DApps with ckb-sdk-java. You can start from scratch and complete each step or you can bypass basic setup steps that are already familiar to you.",source:"@site/docs/javasdk/quickstart.md",sourceDirName:"javasdk",slug:"/javasdk/quickstart",permalink:"/ckb_sdk/docs/javasdk/quickstart",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/javasdk/quickstart.md",version:"current",frontMatter:{id:"quickstart",title:"ckb-sdk-java"},sidebar:"sidebar2",previous:{title:"Overview",permalink:"/ckb_sdk/docs/introduction/overview"},next:{title:"ckb-sdk-go",permalink:"/ckb_sdk/docs/gosdk/quickstart"}},s=[{value:"System Requirements",id:"system-requirements",children:[]},{value:"Steps",id:"steps",children:[{value:"Step 1. Install and Run a CKB Node on DEV Chain",id:"step-1-install-and-run-a-ckb-node-on-dev-chain",children:[]},{value:"Step 2. Get CKB Capacity for Test Accounts",id:"step-2-get-ckb-capacity-for-test-accounts",children:[]},{value:"Step 3. Install JDK",id:"step-3-install-jdk",children:[]},{value:"Step 4. Install Gradle",id:"step-4-install-gradle",children:[]},{value:"Step 5. Create a Gradle Project",id:"step-5-create-a-gradle-project",children:[]},{value:"Step 6. Set Dependencies for CKB SDK",id:"step-6-set-dependencies-for-ckb-sdk",children:[]},{value:"Step 7. Build the Application",id:"step-7-build-the-application",children:[]},{value:"Step 8. Run a Main Method",id:"step-8-run-a-main-method",children:[]}]},{value:"Examples",id:"examples",children:[]}],d={toc:s};function c(e){var a=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide will walk you through setting up a ",(0,r.kt)("strong",{parentName:"p"},"Gradle")," project to develop DApps with ckb-sdk-java. You can start from scratch and complete each step or you can bypass basic setup steps that are already familiar to you. "),(0,r.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Operating System:  All major platforms including Linux, Windows, and macOS."),(0,r.kt)("li",{parentName:"ul"},"CKB node"),(0,r.kt)("li",{parentName:"ul"},"JDK (version 8 or higher)"),(0,r.kt)("li",{parentName:"ul"},"Gradle ( version 5.0 or higher)")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"step-1-install-and-run-a-ckb-node-on-dev-chain"},"Step 1. Install and Run a CKB Node on DEV Chain"),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://xying21.github.io/lumos_doc/docs/preparation/setupsystem#install-a-ckb-node-on-dev-chain-by-using-tippy"},"Install a CKB Node on DEV Chain by Using Tippy"),"."),(0,r.kt)("h3",{id:"step-2-get-ckb-capacity-for-test-accounts"},"Step 2. Get CKB Capacity for Test Accounts"),(0,r.kt)("p",null,"There are several test accounts that can be used for testing purpose in this tutorial."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Do ",(0,r.kt)("strong",{parentName:"p"},"not")," use these private keys, addresses and args elsewhere."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Account 1 {\nPrivateKey: "0x08730a367dfabcadb805d69e0e613558d5160eb8bab9d6e326980c2c46a05db2"\nPublic Key: "0x032edb83018b57ddeb9bcc7287c5cc5da57e6e0289d31c9e98cb361e88678d6288"\nLock args: 0x6407c2ef9bd96e8e14ac4cd15d860e9331802172\nAddress: \'ckt1qyqxgp7za7dajm5wzjkye52asc8fxvvqy9eqlhp82g\',\n}\nAccount 2 {\nPrivate Key: "0xd00c06bfd800d27397002dca6fb0993d5ba6399b4238b2f29ee9deb97593d2bc"\nPublic Key: "0x03fe6c6d09d1a0f70255cddf25c5ed57d41b5c08822ae710dc10f8c88290e0acdf"\nLock Args: 0xc8328aabcd9b9e8e64fbc566c4385c3bdeb219d7\nAddress: ckt1qyqvsv5240xeh85wvnau2eky8pwrhh4jr8ts8vyj37\n}\nAccount 3 {\nPrivate Key: "0xe79f3207ea4980b7fed79956d5934249ceac4751a4fae01a0f7c4a96884bc4e3"\nPublic Key: "0x024a501efd328e062c8675f2365970728c859c592beeefd6be8ead3d901330bc01"\nLock Args: 0x36c329ed630d6ce750712a477543672adab57f4c\nAddress: ckt1qyqrdsefa43s6m882pcj53m4gdnj4k440axqswmu83\n}\n')),(0,r.kt)("p",null,"To get CKB capacity for an account on DEV chain:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Assign the lock args of the account to ",(0,r.kt)("strong",{parentName:"li"},"Block Assembler Lock Arg")," in the Edit Chain form on Tippy explorer and save the changes."),(0,r.kt)("li",{parentName:"ol"},"Restart the CKB node and start the CKB miner on the Tippy dashboard.")),(0,r.kt)("h3",{id:"step-3-install-jdk"},"Step 3. Install JDK"),(0,r.kt)("p",null,"Before developing CKB DApps by using ckb-sdk-java, you must have JDK installed. You can download the latest Java SE Development Kit software from ",(0,r.kt)("a",{parentName:"p",href:"http://www.oracle.com/technetwork/java/javase/downloads/"},"http://www.oracle.com/technetwork/java/javase/downloads/"),". If you have JDK installed, proceed to the next step directly."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the JDK installer file on the download page, for example, ",(0,r.kt)("a",{parentName:"p",href:"https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html"},"JDK 8 downloads"),"."),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You will be required to log in as an Oracle account in order to download the file.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the installer and check the installation."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'> java -version\njava version "1.8.0_291"\nJava(TM) SE Runtime Environment (build 1.8.0_291-b10)\nJava HotSpot(TM) 64-Bit Server VM (build 25.291-b10, mixed mode)\n')))),(0,r.kt)("h3",{id:"step-4-install-gradle"},"Step 4. Install Gradle"),(0,r.kt)("p",null,"Gradle is an open-source build automation tool that can be used for building Java projects. Gradle runs on all major operating systems and requires only a JDK version 8 or higher to run."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Gradle"),(0,r.kt)("p",{parentName:"li"},"Follow the instructions on ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/installation.html"},"https://docs.gradle.org/current/userguide/installation.html")," to install Gradle for your system.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the installation"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"> gradle -v\n\nWelcome to Gradle 7.0.2!\n...\n")))),(0,r.kt)("h3",{id:"step-5-create-a-gradle-project"},"Step 5. Create a Gradle Project"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the code examples."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"> git clone https://github.com/nervosnetwork/ckb-sdk-java.git\n")),(0,r.kt)("p",{parentName:"li"},"The examples are located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ckb-sdk-java/example")," folder. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new folder for the Gradle project."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"> mkdir myDapp\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," folder together with all sub folders and files into the ",(0,r.kt)("inlineCode",{parentName:"p"},"myDapp")," folder. "))),(0,r.kt)("h3",{id:"step-6-set-dependencies-for-ckb-sdk"},"Step 6. Set Dependencies for CKB SDK"),(0,r.kt)("p",null,"Specify the SDK modules to use in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," section of the ",(0,r.kt)("strong",{parentName:"p"},"build.gradle")," file in the project root directory. For example, the following includes a dependency for CKB SDK."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="myDapp/build.gradle"',title:'"myDapp/build.gradle"'},"dependencies {\n    implementation 'org.nervos.ckb:ckb:0.40.0'\n}\n")),(0,r.kt)("p",null,"The following is an example of a complete ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," file that includes a dependency for CKB SDK."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="myDapp/build.gradle"',title:'"myDapp/build.gradle"'},"apply plugin: 'java'\nrepositories { \n    mavenCentral() \n}\ndependencies {\n    implementation 'org.nervos.ckb:ckb:0.40.0'\n}\njar {\n    archiveBaseName = 'java-examples'\n    archiveVersion =  '0.1.0'\n}\n")),(0,r.kt)("h3",{id:"step-7-build-the-application"},"Step 7. Build the Application"),(0,r.kt)("p",null,"To build the application by using Gradle:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a terminal or command prompt window and navigate to the project directory ",(0,r.kt)("inlineCode",{parentName:"p"},"myDapp"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the following command to build the project:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"> gradle build\n")))),(0,r.kt)("h3",{id:"step-8-run-a-main-method"},"Step 8. Run a Main Method"),(0,r.kt)("p",null,"To run a main method:"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," file."),(0,r.kt)("p",{parentName:"li"},"The following example inserts the tasks in the ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," file to run the main method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"RpcExample")," class with the application plugin."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="myDapp/build.gradle" {7-15}',title:'"myDapp/build.gradle"',"{7-15}":!0},'apply plugin: \'java\'\nrepositories { \n    mavenCentral()\n}\nsourceCompatibility = 1.8\ntargetCompatibility = 1.8\nplugins {\n    id "application"\n}\next {\n   javaMainClass = "org.nervos.ckb.RpcExample"\n}\napplication {\n    mainClassName = javaMainClass\n}\ndependencies {\n    implementation "org.nervos.ckb:ckb:0.40.0"\n    testImplementation "junit:junit:4.12"\n}\njar {\n    archiveBaseName = \'java-examples\'\n    archiveVersion =  \'0.1.0\'\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a terminal or command prompt window and navigate to the project directory ",(0,r.kt)("inlineCode",{parentName:"p"},"myDapp"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the following command to run the application."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"> gradle run\n")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-sdk-java/blob/develop/example/src/main/java/org/nervos/ckb/RpcExample.java"},"RPC Examples"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get the Block Chain Information"),(0,r.kt)("li",{parentName:"ul"},"Get the Current Block Number"),(0,r.kt)("li",{parentName:"ul"},"Get the Current Block Information")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-sdk-java/blob/develop/example/src/main/java/org/nervos/ckb/NervosDaoExample.java"},"DAO Examples")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-sdk-java/blob/develop/example/src/main/java/org/nervos/ckb/SendToMultiSigAddressTxExample.java"},"Transfer CKB to a Multisig Address")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-sdk-java/blob/develop/example/src/main/java/org/nervos/ckb/SingleSigWithCkbIndexerTxExample.java"},"Transfer CKB to Multiple Receivers")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-sdk-java/blob/develop/example/src/main/java/org/nervos/ckb/TransferAllBalanceWithCkbIndexerExample.java"},"Transfer all Balance")))}c.isMDXComponent=!0}}]);