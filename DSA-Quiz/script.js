const questionBank = [
    { question: "What is the time complexity of searching for an element in a binary search tree?", options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], answer: "O(log n)" },
    { question: "Which data structure works on the principle of First In, First Out (FIFO)?", options: ["Stack", "Queue", "Heap", "Graph"], answer: "Queue" },
    { question: "How many nodes are present in a full binary tree with k levels?", options: ["k", "2^k - 1", "2^k", "k^2"], answer: "2^k" },
    { question: "Which sorting algorithm has the best average case time complexity?", options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"], answer: "Merge Sort" },
    { question: "What is the height of a balanced binary search tree with n nodes?", options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], answer: "O(log n)" },
    { question: "Which data structure uses the Last In, First Out (LIFO) principle?", options: ["Queue", "Stack", "Deque", "Heap"], answer: "Stack" },
    { question: "What is the time complexity of Bubble Sort in the worst case?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(n!)"], answer: "O(n^2)" },
    { question: "Which STL container is implemented using a heap?", options: ["Queue", "Priority Queue", "Deque", "Set"], answer: "Priority Queue" },
    { question: "What is the time complexity of finding the minimum element in an unsorted array?", options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], answer: "O(n)" },
    { question: "Which of the following applications can be implemented using a stack?", options: ["Job scheduling", "Expression evaluation", "Priority Queue", "Shortest Path"], answer: "Expression evaluation" },
    { question: "Which traversal is used to construct a prefix expression from a binary tree?", options: ["Inorder Traversal", "Preorder Traversal", "Postorder Traversal", "Level-order Traversal"], answer: "Preorder Traversal" },
    { question: "What is the time complexity of merging two sorted arrays?", options: ["O(1)", "O(log n)", "O(n + m)", "O(n^2)"], answer: "O(n + m)" },
    { question: "Which data structure is commonly used to implement a priority queue?", options: ["Binary Heap", "Stack", "Deque", "Queue"], answer: "Binary Heap" },
    { question: "What is the time complexity of finding the maximum element in an unsorted array?", options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], answer: "O(n)" },
    { question: "Which algorithm is used to find the shortest path in a weighted graph?", options: ["Kruskal’s Algorithm", "Prim’s Algorithm", "Dijkstra’s Algorithm", "DFS"], answer: "Dijkstra’s Algorithm" },
    { question: "What is the time complexity of reversing a linked list?", options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], answer: "O(n)" },
    { question: "Which sorting algorithm is non-comparative?", options: ["Quick Sort", "Merge Sort", "Heap Sort", "Radix Sort"], answer: "Radix Sort" },
    { question: "Which of the following is true about dynamic programming?", options: ["It avoids recomputation of overlapping subproblems", "It always gives an approximate solution", "It is used for divide-and-conquer problems", "None of the above"], answer: "It avoids recomputation of overlapping subproblems" },
    { question: "What is the time complexity of accessing the front element of a queue?", options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], answer: "O(1)" },
    { question: "Which traversals can be used to reconstruct a binary tree?", options: ["Inorder and Postorder", "Preorder and Postorder", "Inorder and Preorder", "Inorder, Preorder, Postorder"], answer: "Inorder, Preorder, Postorder" },
    { question: "Which operation is not supported by singly linked lists?", options: ["Traversal", "Insertion at the head", "Deletion from the tail", "Search"], answer: "Deletion from the tail" },
    { question: "What is the time complexity of finding the middle element in a singly linked list?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], answer: "O(n)" },
    { question: "Which data structure is best suited for implementing an undo feature?", options: ["Stack", "Queue", "Deque", "Binary Tree"], answer: "Stack" },
    { question: "What is the time complexity of Heap Sort?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], answer: "O(n log n)" },
    { question: "Which graph traversal technique uses a queue?", options: ["DFS", "BFS", "Topological Sort", "Dijkstra’s Algorithm"], answer: "BFS" },
    { question: "What is the time complexity of inserting an element in a max-heap?", options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], answer: "O(log n)" },
    { question: "Which data structure is used for backtracking algorithms?", options: ["Queue", "Stack", "Heap", "Hash Table"], answer: "Stack" },
    { question: "What is the space complexity of a recursive function?", options: ["O(1)", "O(n)", "O(log n)", "Depends on recursion depth"], answer: "Depends on recursion depth" },
    { question: "Which of the following is not a self-balancing binary search tree?", options: ["AVL Tree", "Red-Black Tree", "B-Tree", "Binary Heap"], answer: "Binary Heap" },
    { question: "What is the best-case time complexity of Quick Sort?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], answer: "O(n log n)" },
    { question: "Which of the following algorithms is used to find bridges in a graph?", options: ["DFS", "BFS", "Kruskal’s Algorithm", "Tarjan’s Algorithm"], answer: "Tarjan’s Algorithm" },
    { question: "What is the time complexity of checking if a graph contains a cycle?", options: ["O(1)", "O(n)", "O(n + m)", "O(n^2)"], answer: "O(n + m)" },
    { question: "What is the time complexity of Depth First Search (DFS)?", options: ["O(1)", "O(V + E)", "O(V^2)", "O(E log V)"], answer: "O(V + E)" },
    { question: "Which of the following is a greedy algorithm?", options: ["Dijkstra's Algorithm", "Kruskal's Algorithm", "Prim's Algorithm", "All of the above"], answer: "All of the above" },
    { question: "What is the time complexity of deleting an element from a max-heap?", options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], answer: "O(log n)" },
    { question: "Which of the following sorting algorithms is stable?", options: ["Merge Sort", "Heap Sort", "Quick Sort", "Shell Sort"], answer: "Merge Sort" },
    { question: "What is the space complexity of Merge Sort?", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], answer: "O(n)" },
    { question: "Which traversal method is used for breadth-first traversal of a tree?", options: ["Preorder Traversal", "Inorder Traversal", "Postorder Traversal", "Level-order Traversal"], answer: "Level-order Traversal" },
    { question: "Which of the following algorithms is used to find the minimum spanning tree of a graph?", options: ["Prim's Algorithm", "Kruskal's Algorithm", "Boruvka's Algorithm", "All of the above"], answer: "All of the above" },
    { question: "What is the time complexity of deleting an element from a binary search tree?", options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], answer: "O(log n)" },
    { question: "Which data structure is used to detect a cycle in a directed graph?", options: ["Queue", "Stack", "Disjoint Set", "DFS"], answer: "DFS" },
    { question: "What is the worst-case time complexity of searching in a hash table with separate chaining?", options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], answer: "O(n)" },
    { question: "Which of the following is true for a binary search tree (BST)?", options: ["Left child is greater than the parent", "Right child is less than the parent", "All left descendants are less than the parent", "None of the above"], answer: "All left descendants are less than the parent" },
    { question: "What is the best-case time complexity of Insertion Sort?", options: ["O(1)", "O(n)", "O(n log n)", "O(n^2)"], answer: "O(n)" },
    { question: "Which algorithm is used for topological sorting of a Directed Acyclic Graph (DAG)?", options: ["DFS", "BFS", "Kruskal's Algorithm", "Bellman-Ford Algorithm"], answer: "DFS" },
    { question: "What is the time complexity of updating a value in a Segment Tree?", options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], answer: "O(log n)" },
    { question: "Which data structure is used for implementing Depth First Search (DFS)?", options: ["Queue", "Stack", "Heap", "Hash Table"], answer: "Stack" },
    { question: "What is the time complexity of accessing an element in an array?", options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], answer: "O(1)" },
    { question: "Which of the following algorithms is used for finding strongly connected components in a graph?", options: ["Tarjan's Algorithm", "Kosaraju's Algorithm", "Both A and B", "None of the above"], answer: "Both A and B" },
    { question: "What is the worst-case time complexity of Quick Sort?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], answer: "O(n^2)" },
    { question: "Which data structure is used for implementing LRU Cache?", options: ["Queue", "Stack", "HashMap with Doubly Linked List", "Binary Heap"], answer: "HashMap with Doubly Linked List" },
    { question: "Which of the following is an example of divide-and-conquer?", options: ["Merge Sort", "Quick Sort", "Binary Search", "All of the above"], answer: "All of the above" },
    { question: "What is the time complexity of finding the union of two disjoint sets using union by rank?", options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], answer: "O(1)" },
    { question: "Which of the following is not a hash collision resolution technique?", options: ["Separate Chaining", "Open Addressing", "Linear Probing", "Binary Search"], answer: "Binary Search" },
    { question: "What is the auxiliary space complexity of Quick Sort?", options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], answer: "O(log n)" },
    { question: "Which traversal is used to construct a postfix expression from a binary tree?", options: ["Inorder Traversal", "Preorder Traversal", "Postorder Traversal", "Level-order Traversal"], answer: "Postorder Traversal" },
    { question: "What is the time complexity of Floyd-Warshall Algorithm?", options: ["O(V + E)", "O(V^2)", "O(V^3)", "O(V^2 log V)"], answer: "O(V^3)" },
    { question: "Which sorting algorithm is an in-place sorting algorithm?", options: ["Merge Sort", "Heap Sort", "Counting Sort", "Radix Sort"], answer: "Heap Sort" },
    { question: "Which of the following is a self-balancing binary search tree?", options: ["AVL Tree", "Red-Black Tree", "B-Tree", "All of the above"], answer: "All of the above" },
    { question: "What is the time complexity of Kruskal’s Algorithm for finding MST?", options: ["O(E log V)", "O(V^2)", "O(V log E)", "O(E log E)"], answer: "O(E log E)" },
    { question: "Which data structure is used for implementing Prim’s Algorithm?", options: ["Binary Heap", "Queue", "Stack", "Disjoint Set"], answer: "Binary Heap" },
    { question: "What is the time complexity of finding the diameter of a tree using DFS?", options: ["O(1)", "O(n)", "O(n log n)", "O(n^2)"], answer: "O(n)" },
    { question: "Which of the following graph algorithms uses backtracking?", options: ["DFS", "BFS", "Prim’s Algorithm", "Kruskal’s Algorithm"], answer: "DFS" },
    { question: "What is the time complexity of Bellman-Ford Algorithm?", options: ["O(V + E)", "O(VE)", "O(V^2)", "O(E log V)"], answer: "O(VE)" },
    { question: "Which data structure is used for implementing a deque?", options: ["Array", "Doubly Linked List", "Heap", "Tree"], answer: "Doubly Linked List" },
    { question: "What is the best-case time complexity of Heap Sort?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], answer: "O(n log n)" },
    { question: "Which of the following is not a characteristic of greedy algorithms?", options: ["Local optimization", "Optimal substructure", "Overlapping subproblems", "Feasibility"], answer: "Overlapping subproblems" },
    { question: "What is the time complexity of finding the strongly connected components using Kosaraju’s Algorithm?", options: ["O(V + E)", "O(V^2)", "O(V log E)", "O(E log V)"], answer: "O(V + E)" },
    { question: "Which traversal technique is used for solving the N-Queens problem?", options: ["BFS", "DFS", "Level-order Traversal", "Inorder Traversal"], answer: "DFS" },
    { question: "What is the time complexity of inserting an element in a hash table with linear probing?", options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], answer: "O(1)" },
    { question: "Which algorithm is used for cycle detection in undirected graphs?", options: ["DFS", "BFS", "Union-Find", "Kruskal's Algorithm"], answer: "Union-Find" },
    { question: "What is the time complexity of Radix Sort?", options: ["O(n log n)", "O(n^2)", "O(nk)", "O(k log n)"], answer: "O(nk)" },
    { question: "Which of the following data structures is best suited for implementing Dijkstra’s Algorithm?", options: ["Binary Heap", "Queue", "Stack", "Deque"], answer: "Binary Heap" },
    { question: "What is the auxiliary space complexity of Merge Sort?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], answer: "O(n)" },
    { question: "Which sorting algorithm is best for small data sets?", options: ["Merge Sort", "Quick Sort", "Insertion Sort", "Heap Sort"], answer: "Insertion Sort" },
    { question: "Which of the following is not a graph traversal algorithm?", options: ["DFS", "BFS", "Dijkstra’s Algorithm", "Kadane’s Algorithm"], answer: "Kadane’s Algorithm" },
    { question: "What is the time complexity of finding the minimum spanning tree using Prim’s Algorithm with a Fibonacci Heap?", options: ["O(E + V log V)", "O(E log V)", "O(V^2)", "O(V + E log E)"], answer: "O(E + V log V)" },
    { question: "Which data structure is used to implement a priority queue in the Dijkstra’s Algorithm?", options: ["Queue", "Heap", "Stack", "Hash Table"], answer: "Heap" },
    { question: "What is the time complexity of Floyd’s Algorithm for finding all-pairs shortest paths?", options: ["O(V + E)", "O(V^2)", "O(V^3)", "O(V log E)"], answer: "O(V^3)" },
    { question: "Which data structure is used for implementing a hash table?", options: ["Array", "Linked List", "Binary Tree", "Any of the above"], answer: "Any of the above" },
    { question: "What is the time complexity of the Knapsack Problem using dynamic programming?", options: ["O(n)", "O(2^n)", "O(nW)", "O(n log W)"], answer: "O(nW)" },
    { question: "Which algorithm is used for detecting negative weight cycles in a graph?", options: ["Bellman-Ford Algorithm", "Dijkstra’s Algorithm", "Prim’s Algorithm", "Kruskal’s Algorithm"], answer: "Bellman-Ford Algorithm" },
    { question: "What is the time complexity of Depth Limited Search?", options: ["O(b^d)", "O(d^b)", "O(bd)", "O(1)"], answer: "O(b^d)" },
    { question: "Which data structure is best suited for implementing breadth-first traversal of a graph?", options: ["Stack", "Queue", "Heap", "Set"], answer: "Queue" },
    { question: "What is the auxiliary space complexity of DFS?", options: ["O(1)", "O(V + E)", "O(d)", "O(V)"], answer: "O(d)" },
    { question: "Which algorithm is used to find the articulation points in a graph?", options: ["DFS", "Tarjan’s Algorithm", "Kruskal’s Algorithm", "Dijkstra’s Algorithm"], answer: "Tarjan’s Algorithm" },
    { question: "What is the time complexity of checking if two strings are anagrams?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"], answer: "O(n)" },
    { question: "Which of the following is not a divide-and-conquer algorithm?", options: ["Merge Sort", "Quick Sort", "Heap Sort", "Binary Search"], answer: "Heap Sort" },
    { question: "What is the time complexity of building a binary heap?", options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], answer: "O(n)" },
    { question: "Which data structure is used to represent a disjoint set?", options: ["Queue", "Stack", "Tree", "Graph"], answer: "Tree" },
    { question: "What is the time complexity of KMP (Knuth-Morris-Pratt) string matching algorithm?", options: ["O(mn)", "O(m + n)", "O(n^2)", "O(log m)"], answer: "O(m + n)" },
    { question: "Which algorithm is used to solve the Longest Common Subsequence (LCS) problem?", options: ["Greedy Algorithm", "Divide and Conquer", "Dynamic Programming", "Backtracking"], answer: "Dynamic Programming" },
    { question: "What is the time complexity of inserting a node in a binary search tree in the average case?", options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], answer: "O(log n)" },
    { question: "Which of the following is a non-comparative sorting algorithm?", options: ["Quick Sort", "Merge Sort", "Counting Sort", "Heap Sort"], answer: "Counting Sort" },
    { question: "What is the time complexity of Breadth-First Search (BFS)?", options: ["O(1)", "O(V + E)", "O(V^2)", "O(E log V)"], answer: "O(V + E)" },
    { question: "Which data structure is used for evaluating postfix expressions?", options: ["Queue", "Stack", "Deque", "Priority Queue"], answer: "Stack" },
];

const answers = {};

function RandomQuestion() {
    const data = new Set();
    while (data.size != 10) {
        const index = Math.floor(Math.random() * questionBank.length);
        data.add(questionBank[index]);
    }
    return [...data];
}

const que = RandomQuestion();
const form = document.querySelector('#quizForm');

que.forEach((element, index) => {
    const newDiv = document.createElement('div');
    newDiv.className = 'question';

    answers[`q${index + 1}`] = element['answer']

    const newPara = document.createElement('p');
    newPara.textContent = `${index + 1}. ${element['question']}`;
    newPara.style.marginBottom = "10px";
    newDiv.appendChild(newPara);

    element['options'].forEach(data => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = "radio";
        input.name = `q${index + 1}`;
        input.value = data;
        input.style.marginBottom = "10px";
        label.appendChild(input);
        label.appendChild(document.createTextNode(data));
        newDiv.appendChild(label);
        newDiv.appendChild(document.createElement('br'));
    })

    form.appendChild(newDiv);
});

const button = document.createElement('button');
button.type = 'submit';
button.className = "submit-btn";
button.textContent = "Submit";

form.appendChild(button);



form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    let result = 0;
    for (let [key, value] of data.entries()) {
        if (value === answers[key]) {
            result++;
        }
    }

    form.style.display = "None";

    const container = document.querySelector('.container');

    const displayResult = document.createElement('h1');
    displayResult.innerHTML = `${result} out of 10 is Correct`;
    container.appendChild(displayResult);

    const reattempt = document.createElement('button');
    reattempt.innerHTML = "Reattempt Quiz";
    reattempt.className = "reattempt-btn"
    container.appendChild(reattempt);

    reattempt.addEventListener('click', () => {
        form.reset();
        form.style.display = "flex";
        displayResult.remove();
        reattempt.remove();
    });
});

const themeToggleButton = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

themeToggleButton.addEventListener('click', () => {
    const isDarkTheme = document.body.dataset.theme === 'dark';
    document.body.dataset.theme = isDarkTheme ? '' : 'dark';
    const photo = document.querySelector(".photo");
    photo.innerHTML = isDarkTheme ? `<i class="fa-solid fa-moon"></i>`: `<i class="fa-solid fa-sun" style="color: #ffffff;"></i>`;
});

