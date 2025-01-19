function solution(elements) {
    var answer = [];
    const len = elements.length;
    
    elements = [...elements, ...elements]


    for (let i = 0; i <= len - 1; i++) {
        for (let j = 0; j <= len; j++){
            answer.push(elements.slice(i, i + j).reduce((acc, cur) => acc + cur, 0));
        }
    }
    
    
    return [...new Set(answer)].length - 1;
}