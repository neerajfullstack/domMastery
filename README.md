# Table of Contents
    1 Node overivew
        [ ] 1.1 The Document Object Model is a hirearchy tree of Javascript node objects
        [ ] 1.2 Node Object Types
        [ ] 1.3 Subnode Inherits from the Node Object
        [ ] 1.4 Properties and methods for working with DOM objects
        [ ] 1.4 Identifying the Type and name of node
        [ ] 1.6 Getting The Node's Value
        [ ] 1.7 Using javascript methods to create element node
    2 Document Nodes
    3 Element Nodes
    4 Element Node selection
    5 Element Node Geometry and Scrolling Geometry
    6 Element Node inline styles
    7 Text Nodes
    8 Document Fragement Nodes
    9 CSS Stylesheet Rules and CSS Rules
    10 Javascript in the DOM
    11 DOM Events
    12 Creating dom.js A wishful jquery-inspired DOM library for modern browsers


# Ch1 - Node Overview

# 1.1 The DOM is a hirearchy/Tree of Javascript node objects

HTML Documents get parsed by a browser and converted into a tree structure of node objects representing a live document. The purpose of dom is to provide programmatic interface for scripting (removing, adding, replacing, eventing and modifying) this live document using javascript.

NOTE: The DOM Was originally an API for xml docs that has been extended for use in HTML Documents

# 1.2 Node Object Types

Common Node types you encounter as Dev
    - DOCUMENT_NODE (window.document object)
    - ELEMENT_NODE (body, a, p, script, html, h1)
    - ATTRIBUTE_NODE (class="funAges")
    - TEXT_NODE (text chars in html docs inluding carriage returns and whitespace)
    - DOCUMENT_FRAGMENT_NODE (e.g. text characters in an HTML document)
    - DOCUMENT_TYPE_NODE (<!doctype html>)


nodeType is just a numeric classification used to describe a certain type of node constructed form a certain javascript interface/constructor. For example, the HTMLBodyElement interface represents a node object that has a node type of 1, which is a classification for ELEMENT_NODEs.


Note: The DOM specification semantically label nodes Node, Element, Text, Attr and HTMLAnchorElement as interfaces, which they are, but keep in mind that these are also the names given to the javascript constructor functions that construct the nodes. As you read the book, I will be refering to these interfaces (Element, Text, Attr, HTMLAnchorElement) as objects or constructor functions, while the spec refers to them as interfaces. 

ATTRIBUTE_NODE is not actually part of a tree, but rather for historical reasons. Given that attribute nodes are sublike nodes of element nodes with no participation in the actual dom tree structure.


COMMENT_NODE as similar to text nodes.


# 1.3 SUB NODE INHERITS FROM THE NODE OBJECT

Each node object in a typical DOM tree inherits properties and methods from Node. Depending on the type of node in the document, there are also aditional subnode objects/interfaces that extend the node object. The following list details the inheritance model implemented by browsers for the most common node interaces. 

- Object < Node < Element < HTMLElement
- Object < Node < ATTR < 
- Object < Node < CharacterData < Text
- Object < Node < Document < HTMLDocument


It's important to remember that not only all document types inherit from Node, but also that the chain of inheritance can be long. For example, all HTMLAnchorElement nodes inherit properties and methods from HTMLElement,Element, Node and Object objects.

Note:
Node is just a javascript constructor function. Logically, therefore, Node inherits from the Object.prototype just like all other objects in javascript.


To verify that all node types inherit properties and methods from the node object, Let's loop over an element node object and examine it's properties and methods. 

```JS 

const nodeAnchor = document.querySelector('a');
let props = [];
for (keys in nodeAnchor) {
    props.push(keys);
}


```