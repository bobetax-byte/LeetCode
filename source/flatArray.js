// 已知如下数组：var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

function flatArray(arr) {
    let result = []
    function init(arr) {
        arr.forEach(item => {
            if (Array.isArray(item) && item.length) {
                init(item)
            } else {
                if (!result.includes(item)) {
                    // TODO 定向插入，减小sort排序，增加判断
                    result.push(item)
                }
            }
        })
    }
    init(arr)
    return result.sort((item1, item2) => {
        return item1 - item2
    })
}

console.log(flatArray(arr))

