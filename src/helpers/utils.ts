class Utils{
    static mergeUnique = (arr1: Array<any>, arr2:Array<any>): Array<any> => {
        return arr1.concat(arr2.filter(function (item) {
            return arr1.indexOf(item) === -1;
        }));
    }

    static compareArrays = (arr1: Array<any>, arr2:Array<any>): boolean => 
        arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])

}

export default Utils;