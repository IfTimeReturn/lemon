window.onload = function() {
    //----------------------------------侧边栏点击功能----------------------------------------
    //侧滑容器父节点
    var offCanvasWrapper = mui('#offCanvasWrapper');
    //主界面‘显示侧滑菜单’按钮的点击事件
    document.getElementById('offCanvasShow').addEventListener('tap', function() {
        offCanvasWrapper.offCanvas('show');
    });
    //侧边栏‘隐藏侧滑菜单’按钮的点击事件
    document.getElementById('okn').addEventListener('tap', function() {
        offCanvasWrapper.offCanvas('close');
    });
    // ----------------------------------------日历逻辑----------------------------------------
    userPicker = new mui.PopPicker();
    dtPicker = new mui.DtPicker({
        type: "month"
    });
    var title = document.querySelector('.mui-dtpicker-title');
    title.style.display = "none";
    var date = document.querySelector("#date");
    var nowdate = document.querySelector(".nowdate");

    var N = new Date().getFullYear();
    var Y = new Date().getMonth() + 1;
    var nowyear = N;
    var nowdate = "01";
    var nowmonth = N + "-" + nowdate;
    var now = new Date().getDate();
    nowdate.innerHTML = `${zero(Y)}月${zero(now)}日`;
    date.innerHTML = `${N}-${zero(Y)}</span><span class="mui-icon mui-icon-arrowdown"></span>`;
    var mover = document.querySelector('.mui-table-view-cell>a');
    mover.style.position = "";
    cliyear();
    month();

    function cliyear() {
        var years = document.querySelector('#year');
        userPicker.setData([{
            value: 'yuer',
            text: '年',
        }, {
            value: 'aaa',
            text: '月'
        }]);
        years.addEventListener('tap', function() {
            userPicker.show(function(items) {
                years.innerHTML = `<span class="vales">${items[0].text}</span><span class="mui-icon mui-icon-arrowdown"></span>`;
                var vales = document.querySelector('.vales');
                if (vales.innerHTML == "年") {
                    date.innerHTML = `${nowyear}</span><span class="mui-icon mui-icon-arrowdown"></span>`;
                    old();
                    year();
                } else {
                    date.innerHTML = `${nowmonth}</span><span class="mui-icon mui-icon-arrowdown"></span>`;
                    months();
                    month();
                }
            }, false);
        });
    }

    //年切换样式
    function old() {
        var lear = document.querySelector('.lear');
        lear.innerHTML = `<p><span><img src="./images/5.gif" alt=""></span><span class="nowdate">01月15日</span></p>
        <dl><dt>花费</dt><dd>1423.00</dd></dl>
        <dl><dt>收入</dt><dd>1000.00</dd></dl>
        <dl><dt>结余</dt><dd>-1423.00</dd></dl>
        <dl><dt></dt><dd></dd></dl>`
    }
    //月切换样式
    function months() {
        var lear = document.querySelector('.lear');
        lear.innerHTML = `<p><span><img src="./images/5.gif" alt=""></span><span class="nowdate">01月15日</span></p>
        <p>支出 <span>55646.00</span></p>`
    }

    function year() {
        var month = document.querySelector('#date');
        month.addEventListener('tap', function() {
            var title = document.querySelector('.mui-dtpicker-title');
            var y = document.querySelector("[data-id = 'picker-y']");
            var m = document.querySelector("[data-id = 'picker-m']");
            var d = document.querySelector("[data-id = 'picker-d']");
            title.style.display = "none";
            y.style.width = "100%";
            m.style.display = "none";
            d.style.display = "none";
            dtPicker.show(function(items) {
                nowyear = items.y.text;
                nowmonth = items.y.text + "-" + nowdate;
                date.innerHTML = items.y.text + `</span><span class="mui-icon mui-icon-arrowdown"></span>`;
            })
        })
    }

    function month() {
        var month = document.querySelector('#date');
        month.addEventListener('tap', function() {
            var title = document.querySelector('.mui-dtpicker-title');
            var y = document.querySelector("[data-id = 'picker-y']");
            var m = document.querySelector("[data-id = 'picker-m']");
            var d = document.querySelector("[data-id = 'picker-d']");
            title.style.display = "none";
            y.style.width = "50%";
            m.style.display = "block";
            d.style.display = "none";
            dtPicker.show(function(items) {
                nowyear = items.text.split("-")[0];
                nowmonth = items.text;
                nowdate = items.text.split("-")[1];
                date.innerHTML = items.text + `</span><span class="mui-icon mui-icon-arrowdown"></span>`;
            })
        })
    }
    //补零函数
    function zero(data) {
        return data > 10 ? data : "0" + data;
    }
    //禁止手势侧滑
    var offCanvasInner = offCanvasWrapper[0].querySelector('.mui-inner-wrap');
    offCanvasInner.addEventListener('drag', function(event) {
        event.stopPropagation();
    });
    // ----------------------------------侧边栏内容逻辑-------------------------------------------------
    //调用高亮方法
    shows("shure");
    shows("nulls");
    shows("lover");
    shows("zeror")
    var bored = document.querySelectorAll('.bored>dd>p');
    bored.forEach(function(item) {
            item.addEventListener('tap', function() {
                item.classList.toggle("active");
                if (this.innerHTML == "全部支出") {
                    if (!this.className) {
                        close("shure");
                    } else {
                        addevent("shure");
                    }
                } else if (this.innerHTML == "全部收入") {
                    if (!this.className) {
                        close("nulls");
                    } else {
                        addevent("nulls");
                    }
                } else {
                    if (!this.className) {
                        close("lover");
                        close("zeror");
                    } else {
                        addevent("zeror");
                        addevent("lover");
                    }
                }
            })
        })
        //封装全选显示点击图标样式
    function addevent(query) {
        var shure = document.querySelectorAll(`.${query}>dd>p`);
        shure.forEach(function(items) {
            items.classList.add("active");
        })
    }
    //封装全选隐藏点击图标样式
    function close(query) {
        var shure = document.querySelectorAll(`.${query}>dd>p`);
        shure.forEach(function(items) {
            items.classList.remove("active");
        })
    }
    //封装单个高亮点击图标样式
    function shows(main) {
        var shure = document.querySelectorAll(`.${main}>dd>p`);
        var len = 0;
        shure.forEach(function(items) {
            items.addEventListener('tap', function() {
                items.classList.toggle("active");
                var len = 0;
                shure.forEach(function(leng) { //回路逻辑
                    if (leng.classList.contains("active")) {
                        len += 1;
                    } else {
                        len -= 1;
                    }
                })
                if (shure.length == len) {
                    isarr(shure);
                } else {
                    closes(shure);
                }
            })
        })
    }
    //判断高亮的归属Name
    function isarr(date) {
        if (date[0].parentNode.parentNode.className == "shure") {
            bored[0].classList.add('active');
        } else if (date[0].parentNode.parentNode.className == "nulls") {
            bored[1].classList.add('active');
        } else {
            bored[2].classList.add('active');
        }
    }
    //熄灭图标样式
    function closes(date) {
        if (date[0].parentNode.parentNode.className == "shure") {
            bored[0].classList.remove('active');
        } else if (date[0].parentNode.parentNode.className == "nulls") {
            bored[1].classList.remove('active');
        } else {
            bored[2].classList.remove('active');
        }
    }
    //重置点击事件
    var revers = document.querySelector('.revers');
    revers.addEventListener('tap', function() {
        close("bored")
        close("shure");
        close("nulls");
        close("lover");
        close("zeror");
    });
    // ----------------------------------------------------------------------------
    var posion = document.querySelector('.posion');
    posion.addEventListener('tap', function() {
            window.location.href = "addlist.html";
        })
        //渲染账单页面
    var xhr = new XMLHttpRequest();
    xhr.onload = function(res) {
        var newstr = "";
        var newdate = JSON.parse(res.target.responseText).message;
        newdate.forEach(function(item) {
            console.log(item);
            if (item.type == 1) {
                newstr += ` <li>
            <dl>
                <dt><div class="${item.icon}"></div> </dt>
                <dd>${item.name}</dd>
            </dl>
            <p class="tev">${item.money}</p>
        </li>`
            } else {
                newstr += ` <li>
            <dl>
                <dt><div class="${item.icon}"></div> </dt>
                <dd>${item.name}</dd>
            </dl>
            <p id="give" class="tev">${item.money}</p>
        </li>`
            }

        })
        var uls = document.querySelector('.uls');
        uls.innerHTML = newstr;
    }
    xhr.open('get', '/billlist');
    xhr.send();

}