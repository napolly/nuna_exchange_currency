let arr = ['A','B','C','D','E','F','G','H']

let root;
let answer = [];

class Node {
    constructor(data){
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

function insertLevelOrder(arr, root, i){

    if(i < arr.length) {
        root = new Node(arr[i])

        root.left = insertLevelOrder(arr, root.left, 2*i+1);
        root.right = insertLevelOrder(arr, root.right, 2*i+1);

    }
    return root;
}

function inOrder(root) {
    if(root!=null){
        inOrder(root.left)
        answer.push(root.data)
        inOrder(root.right)
    }
}

function solution(message) {
    let tree = insertLevelOrder(message, root, 0)
    inOrder(tree)
    return answer;
}

let resultarr = solution(arr)
console.log(resultarr);
