<!--
 * @Description: 
 * @Author: dongshen
 * @Date: 2019-08-19 15:33:28
 * @LastEditors: dongshen
 * @LastEditTime: 2019-08-20 09:58:55
 -->
# plan
1. 原生js复习
    * dom
    *  原始（Primitive）类型
    * 对象（Object）类型
    -  typeof vs instanceof
    ```
    typeof 则用以获取一个变量或者表达式的类型, 一般只能返回如下几个结果:
    number,boolean,string,function（函数）,object（NULL,数组，对象）,undefined。
    instanceof 运算符是用来在运行时指出对象是否是构造器的一个实例, 例如漏写了new运算符去调用某个构造器, 此时构造器内部可以通过 instanceof 来判断.(java中功能类似)
    ```
    - 类型转换
    - this
    - instanceof-原型链-构造函数
        instanceof运算符用于测试构造函数的prototype属性是否出现在对象的原型链中的任何位置
    - new 运算符
    ```
    var  obj = new F();  :
    
    var obj  = {};
    obj.__proto__ = F.prototype;
    F.call(obj);
    ```
    - _proto_ vs prototype
    ```
    js里所有的对象都有proto属性(对象，函数)，指向构造该对象的构造函数的原型。
    只有函数function才具有prototype属性。这个属性是一个指针，指向一个对象，这个对象的用途就是包含所有实例共享的属性和方法（我们把这个对象叫做原型对象）。原型对象也有一个属性，叫做constructor，这个属性包含了一个指针，指回原构造函数。
    ```
2. 数据结构和算法
3. vue基础，和react，anglur的区别
4. es6
5. webpack
6. http
7. 设计模式
8. css。sass
9. 前端三大框架的区别、localstorage、session、cookie

# 项目不断跟进
1. roleManage代码学习
2. gpapi代码学习
3. travel项目搭建