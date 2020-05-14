class Utils{
    static mergeUnique = (arr1: Array<any>, arr2:Array<any>): Array<any> => {
        return arr1.concat(arr2.filter(function (item) {
            return arr1.indexOf(item) === -1;
        }));
    }
}

export default Utils;