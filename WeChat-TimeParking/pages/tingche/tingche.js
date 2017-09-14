Page({ 
  data: { 
    haoma:0,
    x:0,
    y:0,
    
    showModalStatus: false,

    array: ['00','01','02','03','04','05','06','07','08','09','10','11','12'],
    array2: ['00', '05', '10', '15', '20', '25', '30', '35', '40','45', '50', '55', ],
    
    time: 0,
    index: 0, 
    index2:0,
    }, 
    bindPickerChange: function (e) { 
      console.log('picker发送选择改变，携带值为', 
      e.detail.value)     
      this.setData({ 
        index: e.detail.value, 
        x: e.detail.value * 60,
       
        
        })
         }, 
    
    bindPickerChange2: function(e) {
      console.log('picker发送选择改变，携带值为',
        e.detail.value)
      this.setData({
        index2: e.detail.value,
        y: e.detail.value*5,
       
      })
    }, 
   
    inputHaoMa : function (e) {
      
      var haoma = e.detail.value;
      console.log(haoma)

        this.setData({
          haoma: e.detail.value
        })
        
    },

    //验证车位号

    button:function(e){

      
      console.log('点击确定');
      console.log('x+y' + '  ' +(parseInt(this.data.x) + parseInt(this.data.y)));
      
      console.log('index' +' '+ this.data.index);
      console.log('index2' +' '+ this.data.index2);
      if (this.data.haoma == 12345 && (this.data.x + this.data.y) * 0.02 != 0&&(this.data.x + this.data.y) * 0.02<3.6){
        this.toast1;
        console.log('相等');
        
        
        wx.navigateTo({
          url: '../jishi/jishi',
         
        })
      }
      else{
        var currentStatu = e.currentTarget.dataset.statu;
        this.util(currentStatu)
      }
      
    },
    
   
    util: function (currentStatu) {
      /* 动画部分 */
      // 第1步：创建动画实例   
      var animation = wx.createAnimation({
        duration: 200,  //动画时长  
        timingFunction: "linear", //线性  
        delay: 0  //0则不延迟  
      });

      // 第2步：这个动画实例赋给当前的动画实例  
      this.animation = animation;

      // 第3步：执行第一组动画  
      animation.opacity(0).rotateX(-100).step();

      // 第4步：导出动画对象赋给数据对象储存  
      this.setData({
        animationData: animation.export()
      })

      // 第5步：设置定时器到指定时候后，执行第二组动画  
      setTimeout(function () {
        // 执行第二组动画  
        animation.opacity(1).rotateX(0).step();
        // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象  
        this.setData({
          animationData: animation
        })

        //关闭  
        if (currentStatu == "close") {
          this.setData(
            {
              showModalStatus: false
            }
          );
        }
      }.bind(this), 200)

      // 显示  
      if (currentStatu == "open") {
        this.setData(
          {
            showModalStatus: true
          }
        );
      }
    } 
    ,


    })
