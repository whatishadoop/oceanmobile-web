移动设备分辨率（终于弄懂了为什么移动端设计稿总是640px和750px） iphone6设置像素比为2
https://www.cnblogs.com/tu-0718/p/9596894.html

 .pic-wrapper
        width: 100%
        overflow: hidden
        white-space: nowrap
        .pic-list
          font-size: 0
          .pic-item
            display: inline-block
            margin-right: 6px
            width: 120px
            height: 90px
            &:last-child
              margin: 0

              <div class="pic-wrapper" v-el:pic-wrapper>
                        <ul class="pic-list" v-el:pic-list>
                          <li class="pic-item" v-for="pic in seller.pics">
                            <img :src="pic" width="120" height="90">
                          </li>
                        </ul>
                      </div>
https://www.imooc.com/article/272021
