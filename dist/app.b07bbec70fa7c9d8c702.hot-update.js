"use strict";
self["webpackHotUpdatewarkopbae_restaurant_apps"]("app",{

/***/ "./src/scripts/utils/drawer-initiator.js":
/*!***********************************************!*\
  !*** ./src/scripts/utils/drawer-initiator.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable object-curly-newline */
const DrawerInitiator = {
  init({ button, drawer, content, navTop }) {
    button.addEventListener("click", (event) => {
      this._toggleDrawer(button, event, drawer);
    });

    content.addEventListener("click", (event) => {
      this._closeDrawer(button, event, drawer);
    });
  },

  _toggleDrawer(button, event, drawer) {
    event.stopPropagation();
    button.classList.toggle("active");
    drawer.classList.toggle("show");
  },

  _closeDrawer(button, event, drawer) {
    event.stopPropagation();
    button.classList.remove("active");
    drawer.classList.remove("show");
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerInitiator);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmIwN2JiZWM3MGZhN2M5ZDhjNzAyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxTQUFTLGlDQUFpQztBQUMxQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXJrb3BiYWUtcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvdXRpbHMvZHJhd2VyLWluaXRpYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBvYmplY3QtY3VybHktbmV3bGluZSAqL1xyXG5jb25zdCBEcmF3ZXJJbml0aWF0b3IgPSB7XHJcbiAgaW5pdCh7IGJ1dHRvbiwgZHJhd2VyLCBjb250ZW50LCBuYXZUb3AgfSkge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5fdG9nZ2xlRHJhd2VyKGJ1dHRvbiwgZXZlbnQsIGRyYXdlcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5fY2xvc2VEcmF3ZXIoYnV0dG9uLCBldmVudCwgZHJhd2VyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIF90b2dnbGVEcmF3ZXIoYnV0dG9uLCBldmVudCwgZHJhd2VyKSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgZHJhd2VyLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG4gIH0sXHJcblxyXG4gIF9jbG9zZURyYXdlcihidXR0b24sIGV2ZW50LCBkcmF3ZXIpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICBkcmF3ZXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYXdlckluaXRpYXRvcjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9