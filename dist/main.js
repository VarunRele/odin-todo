"use strict";
(self["webpackChunktodo_project"] = self["webpackChunktodo_project"] || []).push([["main"],{

/***/ "./src/Datet.js":
/*!**********************!*\
  !*** ./src/Datet.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentDate: () => (/* binding */ getCurrentDate),
/* harmony export */   getCurrentDateAndTime: () => (/* binding */ getCurrentDateAndTime)
/* harmony export */ });
const getDate = () => {
    let date_ob = new Date()
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();

    return {date_ob, date, month, year}
}

const getCurrentDateAndTime = () => {
    const { date_ob, date, month, year } = getDate()
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    let hours = date_ob.getHours();

    return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
}

const getCurrentDate = () => {
    const { date, month, year } = getDate()
    return year + "-" + month + "-" + date
}



/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Datet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Datet */ "./src/Datet.js");


const Task = () => {
    
    let task = {
        duedate: (0,_Datet__WEBPACK_IMPORTED_MODULE_0__.getCurrentDateAndTime)()
    }
    const setTitle = (txt) => {
        task.title = txt
    }

    const getTitle = () => {
        return task.title
    }

    const setDescription = (txt) => {
        task.description = txt
    }

    const getDescription = () => {
        return task.description 
    }

    const getTimeCreated = () => {
        return task.duedate
    }
    return {
        setTitle,
        getTitle,
        setDescription,
        getDescription,
        getTimeCreated
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/Task.js");


const t1 = (0,_Task__WEBPACK_IMPORTED_MODULE_0__["default"])()

t1.setTitle("Helo")
console.log(t1.getTitle())

t1.setDescription("Lets goo ")
console.log(t1.getDescription())
console.log(t1.getTimeCreated())

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZCQUE2QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEIrRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2REFBcUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7QUNuQ1U7QUFDekI7QUFDQSxXQUFXLGlEQUFJO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvRGF0ZXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldERhdGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgZGF0ZV9vYiA9IG5ldyBEYXRlKClcclxuICAgIGxldCBkYXRlID0gKFwiMFwiICsgZGF0ZV9vYi5nZXREYXRlKCkpLnNsaWNlKC0yKTtcclxuICAgIGxldCBtb250aCA9IChcIjBcIiArIChkYXRlX29iLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpO1xyXG4gICAgbGV0IHllYXIgPSBkYXRlX29iLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgcmV0dXJuIHtkYXRlX29iLCBkYXRlLCBtb250aCwgeWVhcn1cclxufVxyXG5cclxuY29uc3QgZ2V0Q3VycmVudERhdGVBbmRUaW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRlX29iLCBkYXRlLCBtb250aCwgeWVhciB9ID0gZ2V0RGF0ZSgpXHJcbiAgICBsZXQgbWludXRlcyA9IGRhdGVfb2IuZ2V0TWludXRlcygpO1xyXG4gICAgbGV0IHNlY29uZHMgPSBkYXRlX29iLmdldFNlY29uZHMoKTtcclxuICAgIGxldCBob3VycyA9IGRhdGVfb2IuZ2V0SG91cnMoKTtcclxuXHJcbiAgICByZXR1cm4geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRhdGUgKyBcIiBcIiArIGhvdXJzICsgXCI6XCIgKyBtaW51dGVzICsgXCI6XCIgKyBzZWNvbmRzXHJcbn1cclxuXHJcbmNvbnN0IGdldEN1cnJlbnREYXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRlLCBtb250aCwgeWVhciB9ID0gZ2V0RGF0ZSgpXHJcbiAgICByZXR1cm4geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRhdGVcclxufVxyXG5cclxuZXhwb3J0IHtnZXRDdXJyZW50RGF0ZSwgZ2V0Q3VycmVudERhdGVBbmRUaW1lfSIsImltcG9ydCB7IGdldEN1cnJlbnREYXRlLCBnZXRDdXJyZW50RGF0ZUFuZFRpbWUgfSBmcm9tIFwiLi9EYXRldFwiXHJcblxyXG5jb25zdCBUYXNrID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBsZXQgdGFzayA9IHtcclxuICAgICAgICBkdWVkYXRlOiBnZXRDdXJyZW50RGF0ZUFuZFRpbWUoKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAodHh0KSA9PiB7XHJcbiAgICAgICAgdGFzay50aXRsZSA9IHR4dFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0YXNrLnRpdGxlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAodHh0KSA9PiB7XHJcbiAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IHR4dFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0YXNrLmRlc2NyaXB0aW9uIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFRpbWVDcmVhdGVkID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0YXNrLmR1ZWRhdGVcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0VGl0bGUsXHJcbiAgICAgICAgZ2V0VGl0bGUsXHJcbiAgICAgICAgc2V0RGVzY3JpcHRpb24sXHJcbiAgICAgICAgZ2V0RGVzY3JpcHRpb24sXHJcbiAgICAgICAgZ2V0VGltZUNyZWF0ZWRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzayIsImltcG9ydCBUYXNrIGZyb20gJy4vVGFzaydcclxuXHJcbmNvbnN0IHQxID0gVGFzaygpXHJcblxyXG50MS5zZXRUaXRsZShcIkhlbG9cIilcclxuY29uc29sZS5sb2codDEuZ2V0VGl0bGUoKSlcclxuXHJcbnQxLnNldERlc2NyaXB0aW9uKFwiTGV0cyBnb28gXCIpXHJcbmNvbnNvbGUubG9nKHQxLmdldERlc2NyaXB0aW9uKCkpXHJcbmNvbnNvbGUubG9nKHQxLmdldFRpbWVDcmVhdGVkKCkpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9