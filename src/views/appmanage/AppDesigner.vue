<template>
  <div>
    <!--/.navbar-fixed-top -->
    <div class="container">
      <div class="row">
        <div class="">
          <!--左侧组件工具栏-->
          <div class="sidebar-nav">
            <ul class="nav nav-list accordion-group">
              <li class="nav-header">
                <div class="pull-right popover-info">
                  <i class="glyphicon glyphicon-question-sign"></i>
                  <div class="popover fade right">
                    <div class="arrow"></div>
                    <h3 class="popover-title">帮助</h3>
                    <div class="popover-content">
                      xxx
                    </div>
                  </div>
                </div>
                <i class="glyphicon-plus glyphicon"></i>
                布局设置
              </li>
              <li id="estRows" class="rows">
                <div class="lyrow ui-draggable">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon-remove glyphicon"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								     <i class="glyphicon glyphicon-move"></i>
								      拖动
							    </span>
                  <div class="preview">
                    12
                  </div>
                  <div class="view">
                    <div class="row clearfix">
                      <div class="col-md-12 column"></div>
                    </div>
                  </div>
                </div>
                <div class="lyrow ui-draggable">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon-remove glyphicon"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								<i class="glyphicon glyphicon-move"></i>
								拖动
							</span>

                  <div class="preview">
                    6 6
                  </div>
                  <div class="view">
                    <div class="row clearfix">
                      <div class="col-md-6 column"></div>
                      <div class="col-md-6 column"></div>
                    </div>
                  </div>
                </div>
                <div class="lyrow ui-draggable">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon-remove glyphicon"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								<i class="glyphicon glyphicon-move"></i>
								拖动
							</span>

                  <div class="preview">
                    8 4
                  </div>
                  <div class="view">
                    <div class="row clearfix">
                      <div class="col-md-8 column"></div>
                      <div class="col-md-4 column"></div>
                    </div>
                  </div>
                </div>
                <div class="lyrow ui-draggable">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon-remove glyphicon"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
                  <i class="glyphicon glyphicon-move"></i>
                  拖动
                </span>
                  <div class="preview">
                    4 4 4
                  </div>
                  <div class="view">
                    <div class="row clearfix">
                      <div class="col-md-4 column"></div>
                      <div class="col-md-4 column"></div>
                      <div class="col-md-4 column"></div>
                    </div>
                  </div>
                </div>
                <div class="lyrow ui-draggable">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon-remove glyphicon"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								<i class="glyphicon glyphicon-move"></i>
								拖动
							</span>

                  <div class="preview">
                    2 6 4
                  </div>
                  <div class="view">
                    <div class="row clearfix">
                      <div class="col-md-2 column"></div>
                      <div class="col-md-6 column"></div>
                      <div class="col-md-4 column"></div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul class="nav nav-list accordion-group">
              <li class="nav-header">
                <i class="glyphicon glyphicon-plus"></i>
                基本CSS
                <div class="pull-right popover-info">
                  <i class="glyphicon glyphicon-question-sign "></i>

                  <div class="popover fade right">
                    <div class="arrow"></div>
                    <h3 class="popover-title">帮助</h3>

                    <div class="popover-content">
                      xxxxx
                    </div>
                  </div>
                </div>
              </li>
              <li id="elmBase" class="boxes">
                <div class="box box-element ui-draggable">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								<i class="glyphicon glyphicon-move"></i>
								拖动
							</span>
                  <span class="configuration">
								<span class="btn-group btn-group-xs">
									<a class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#">
                                      对齐
                                      <span class="caret"></span>
                                    </a>
									<ul class="dropdown-menu">
                                      <li class="active">
                                        <a href="#" rel="">默认</a>
                                      </li>
                                      <li class="">
                                        <a href="#" rel="text-left">靠左</a>
                                      </li>
                                      <li class="">
                                        <a href="#" rel="text-center">居中</a>
                                      </li>
                                      <li class="">
                                        <a href="#" rel="text-right">靠右</a>
                                      </li>
                                    </ul>
								</span>
								<span class="btn-group btn-group-xs">
									<a class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="#">
                                      标记
                                      <span class="caret"></span>
                                    </a>
									<ul class="dropdown-menu">
                                      <li class="active">
                                        <a href="#" rel="">默认</a>
                                      </li>
                                      <li class="">
                                        <a href="#" rel="muted">禁用</a>
                                      </li>
                                      <li class="">
                                        <a href="#" rel="text-warning">警告</a>
                                      </li>
                                      <li class="">
                                        <a href="#" rel="text-error">错误</a>
                                      </li>
                                      <li class="">
                                        <a href="#" rel="text-info">提示</a>
                                      </li>
                                      <li class="">
                                        <a href="#" rel="text-success">成功</a>
                                      </li>
                                    </ul>
								</span>
							</span>

                  <div class="preview">标题栏</div>
                  <div class="view">
                    <h3 contenteditable="true">h3. 这是一套可视化布局系统.</h3>
                  </div>
                </div>
              </li>
            </ul>
            <ul class="nav nav-list accordion-group">
              <li class="nav-header">
                <i class="glyphicon glyphicon-plus"></i>
                工具组件
                <div class="pull-right popover-info">
                  <i class="glyphicon glyphicon-question-sign "></i>

                  <div class="popover fade right">
                    <div class="arrow"></div>
                    <h3 class="popover-title">帮助</h3>

                    <div class="popover-content">
                      {{$t("message.title")}}
                    </div>
                  </div>
                </div>
              </li>
              <li id="elmComponents" class="boxes">
                <div class="box box-element ui-draggable">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								<i class="glyphicon glyphicon-move"></i>
								拖动
							</span>
                  <span class="configuration">
								  <span id="vertical" href="javascript:void(0)">竖向</span>
							</span>

                  <div class="preview">按钮组</div>
                  <div class="view">
                    <div class="btn-group">
                      <button class="btn btn-default" type="button">
                        <i class="glyphicon glyphicon-align-left"></i>
                        左
                      </button>
                      <button class="btn btn-default" type="button">
                        <i class="glyphicon glyphicon-align-center"></i>
                        中
                      </button>
                      <button class="btn btn-default" type="button">
                        <i class="glyphicon glyphicon-align-right"></i>
                        右
                      </button>
                      <button class="btn btn-default" type="button">
                        <i class="glyphicon glyphicon-align-justify"></i>
                        全
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul class="nav nav-list accordion-group">
              <li class="nav-header">
                <i class="glyphicon glyphicon-plus"></i>
                JavaScript
                <div class="pull-right popover-info">
                  <i class="glyphicon glyphicon-question-sign "></i>

                  <div class="popover fade right">
                    <div class="arrow"></div>
                    <h3 class="popover-title">帮助</h3>

                    <div class="popover-content">
                      xxxxx
                    </div>
                  </div>
                </div>
              </li>
              <li id="elmJS" class="boxes mute">
                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								    <i class="glyphicon glyphicon-move"></i>
								    拖动
							    </span>
                  <div class="preview">左箭头标题</div>
                  <div class="view">
                    <div class="cus_component" type="leftarrow-title"></div>
                  </div>
                </div>

                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								<i class="glyphicon glyphicon-move"></i>
								拖动
							</span>
                  <div class="preview">导航栏</div>
                  <div class="view">
                    <div class="cus_component" type="barchart">惺惺惜惺惺</div>
                  </div>
                </div>
                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								<i class="glyphicon glyphicon-move"></i>
								拖动
							</span>
                  <div class="preview">头部组件</div>
                  <div class="view">
                    <div class="cus_component" type="m-header"></div>
                  </div>
                </div>
                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								<i class="glyphicon glyphicon-move"></i>
								拖动
							</span>
                  <div class="preview">切换组件</div>
                  <div class="view">
                    <div class="cus_component" type="m-tabs"></div>
                  </div>
                </div>
                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								<i class="glyphicon glyphicon-move"></i>
								拖动
							</span>
                  <div class="preview">标签页</div>
                  <div class="view">
                    <div class="cus_component" type="tabs-list"></div>
                  </div>
                </div>

                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								    <i class="glyphicon glyphicon-move"></i>
								    拖动
							    </span>
                  <div class="preview">个人中心</div>
                  <div class="view">
                    <div class="cus_component" type="my-component"></div>
                  </div>
                </div>
                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
                    <i class="glyphicon glyphicon-move"></i>
                    拖动
                  </span>
                  <div class="preview">地图</div>
                  <div class="view">
                    <div class="cus_component" type="map-ol"></div>
                  </div>
                </div>
                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
                    <i class="glyphicon glyphicon-move"></i>
                    拖动
                  </span>
                  <div class="preview">echarts图表</div>
                  <div class="view">
                    <div class="cus_component" type="echarts-chart"></div>
                  </div>
                </div>
                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
                    <i class="glyphicon glyphicon-move"></i>
                    拖动
                  </span>
                  <div class="preview">标签组</div>
                  <div class="view">
                    <div class="cus_component" type="labels"></div>
                  </div>
                </div>
                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
                    <i class="glyphicon glyphicon-move"></i>
                    拖动
                  </span>
                  <div class="preview">标签头部</div>
                  <div class="view">
                    <div class="cus_component" type="labelsTop"></div>
                  </div>
                </div>
                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								    <i class="glyphicon glyphicon-move"></i>
								    拖动
							    </span>
                  <div class="preview">告警信息</div>
                  <div class="view">
                    <div class="cus_component" type="alarm-info"></div>
                  </div>
                </div>

                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								    <i class="glyphicon glyphicon-move"></i>
								    拖动
							    </span>
                  <div class="preview">按钮</div>
                  <div class="view">
                    <div class="cus_component" type="btn"></div>
                  </div>
                </div>

                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								    <i class="glyphicon glyphicon-move"></i>
								    拖动
							    </span>
                  <div class="preview">小按钮</div>
                  <div class="view">
                    <div class="cus_component" type="btn-small"></div>
                  </div>
                </div>

                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								    <i class="glyphicon glyphicon-move"></i>
								    拖动
							    </span>
                  <div class="preview">占位控件</div>
                  <div class="view">
                    <div class="cus_component" type="place-holder"></div>
                  </div>
                </div>
                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								    <i class="glyphicon glyphicon-move"></i>
								    拖动
							    </span>
                  <div class="preview">输入列表</div>
                  <div class="view">
                    <div class="cus_component" type="input-list"></div>
                  </div>
                </div>

                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								    <i class="glyphicon glyphicon-move"></i>
								    拖动
							    </span>
                  <div class="preview">修改手机号</div>
                  <div class="view">
                    <div class="cus_component" type="change-phone"></div>
                  </div>
                </div>

                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								    <i class="glyphicon glyphicon-move"></i>
								    拖动
							    </span>
                  <div class="preview">修改邮箱</div>
                  <div class="view">
                    <div class="cus_component" type="mail"></div>
                  </div>
                </div>
                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								    <i class="glyphicon glyphicon-move"></i>
								    拖动
							    </span>
                  <div class="preview">案件列表</div>
                  <div class="view">
                    <div class="cus_component" type="case-list"></div>
                  </div>
                </div>
                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								    <i class="glyphicon glyphicon-move"></i>
								    拖动
							    </span>
                  <div class="preview">应用首页</div>
                  <div class="view">
                    <div class="cus_component" type="main-page"></div>
                  </div>
                </div>

                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								    <i class="glyphicon glyphicon-move"></i>
								    拖动
							    </span>
                  <div class="preview">个人信息</div>
                  <div class="view">
                    <div class="cus_component" type="personel-info"></div>
                  </div>
                </div>

                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								    <i class="glyphicon glyphicon-move"></i>
								    拖动
							    </span>
                  <div class="preview">个人详情</div>
                  <div class="view">
                    <div class="cus_component" type="personel-detail"></div>
                  </div>
                </div>

                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								    <i class="glyphicon glyphicon-move"></i>
								    拖动
							    </span>
                  <div class="preview">首页</div>
                  <div class="view">
                    <div class="cus_component" type="home-page"></div>
                  </div>
                </div>

                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								    <i class="glyphicon glyphicon-move"></i>
								    拖动
							    </span>
                  <div class="preview">展示列表</div>
                  <div class="view">
                    <div class="cus_component" type="show-list"></div>
                  </div>
                </div>

                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								    <i class="glyphicon glyphicon-move"></i>
								    拖动
							    </span>
                  <div class="preview">修改用户名</div>
                  <div class="view">
                    <div class="cus_component" type="revise-username"></div>
                  </div>
                </div>

                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								    <i class="glyphicon glyphicon-move"></i>
								    拖动
							    </span>
                  <div class="preview">案件详情</div>
                  <div class="view">
                    <div class="cus_component" type="case-detail"></div>
                  </div>
                </div>

                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								    <i class="glyphicon glyphicon-move"></i>
								    拖动
							    </span>
                  <div class="preview">我的案件</div>
                  <div class="view">
                    <div class="cus_component" type="my-case"></div>
                  </div>
                </div>

                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								    <i class="glyphicon glyphicon-move"></i>
								    拖动
							    </span>
                  <div class="preview">特定子页</div>
                  <div class="view">
                    <div class="cus_component" type="specific-page"></div>
                  </div>
                </div>

                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								    <i class="glyphicon glyphicon-move"></i>
								    拖动
							    </span>
                  <div class="preview">筛选子页</div>
                  <div class="view">
                    <div class="cus_component" type="filter-page"></div>
                  </div>
                </div>

                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								    <i class="glyphicon glyphicon-move"></i>
								    拖动
							    </span>
                  <div class="preview">搜索子页</div>
                  <div class="view">
                    <div class="cus_component" type="search-page"></div>
                  </div>
                </div>

                <div class="box box-element ui-draggable" renderstate="C">
                  <a href="#close" class="remove label label-danger">
                    <i class="glyphicon glyphicon-remove"></i>
                    删除
                  </a>
                  <span class="drag label label-default">
								    <i class="glyphicon glyphicon-move"></i>
								    拖动
							    </span>
                  <div class="preview">图表标签</div>
                  <div class="view">
                    <div class="cus_component" type="echarts-tabs"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--编辑器区域-->
        <div class="demo ui-sortable">
          <div class="lyrow ui-draggable" style="display: block;">
            <div class="row clearfix">
              <div id="mount-point" class="col-md-12 column ui-sortable mcontent">
                <!--动态内容-->
              </div>
            </div>
          </div>
          <!--右侧弹出框-->
          <m-drawers></m-drawers>
        </div>

        <div id="download-layout">
          保存页面内容临时存放区
        </div>
      </div>
      <!--/row-->
    </div>
    <!--/.fluid-container-->
    <div class="btn-wrapper">
      <el-button-group>
        <el-button type="info" plain icon="el-icon-check" @click="saveLayoutHtml($event)"></el-button>
        <el-button type="info" plain icon="el-icon-edit" @click="addLayoutHtml($event)"></el-button>
        <el-button type="info" plain icon="el-icon-delete" @click="clearLayoutPage($event)"></el-button>
      </el-button-group>
    </div>
    <!--设置:closable="false" 取消差按钮-->
    <Drawer
      :mask-style="maskstyle"
      :styles="styles"
      v-model="openTheme"
      title="编辑组件"
      width="400"
    >
      <component :is="currentView" :component-obj="componentObj" :key="componentObj.cid" @showEditDialog="showEditDialog" />
    </Drawer>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import { init } from '../../utils/scripts'
  import { add, get } from '@/api/appPage'

  export default {
    name: 'Appdesigner',
    data() {
      // 普通属性国际化切换无效果
      return {
        currentView: '',
        openTheme: false,
        maskstyle: {
          background: 'transparent'
        },
        styles: {
          height: 'calc(100% - 55px)',
          overflow: 'auto',
          paddingBottom: '53px',
          position: 'static'
        },
        componentObj: {},
        pageContent1: '',
        pageContent2: '',
        apppage: {
          id: null,
          name: '',
          code: '',
          content: '',
          contentParse: '',
          config: '',
          sort: 100,
          enabled: true,
          remark: '',
          creator: 'admin'
        }
      }
    },
    computed: {
      // js中引用国际化放在计算属性中
      nike() {
        return this.$t('brands.nike')
      }
    },
    mounted: function() {
      // 弹出属性配置栏
      this.$bus.$on('on-attraConfig', (componentObj, conifgComponentName) => {
        this.currentView = ''
        this.currentView = conifgComponentName
        this.componentObj = componentObj
        console.log(componentObj._uid)
        this.openTheme = true
      })

      init(this)
      // 绑定组件动态渲染
      this._sortRender()
      $('.sidebar-nav .box').draggable({
        connectToSortable: '.column',
        helper: 'clone',
        handle: '.drag',
        drag: function(e, t) {
          t.helper.width(400)
        }
      })
    },
    methods: {
      saveLayoutHtml(e) {
        const formatSrc = $('.mcontent').html()
        let previewContent = ''
        $('#download-layout').html(formatSrc).find('[obj=component]').each(function() {
          let cache = $(this).attr('cache')
          if (!cache) {
            cache = ''
          }
          let ctype = $(this).attr('ctype')
          if (!ctype) {
            ctype = ''
          }
          const replaceStr = '<' + ctype + ' passCache=\'' + cache + '\'>' + '</' + ctype + '>'
          $(this).replaceWith(replaceStr).html()
          previewContent += replaceStr
        })
        // 动态内容区
        this.pageContent1 = $('#download-layout').html()
        alert(this.pageContent1)
        // 预览区内容
        this.pageContent2 = previewContent
        alert(this.pageContent2)
        this.previewLayoutHtml(e)
        // 向后台发送保存后编辑状态下内容以及预览模式内容
        this.apppage.name = '应用页面1'
        this.apppage.code = 'apppage1'
        this.apppage.content = this.pageContent1
        this.apppage.contentParse = this.pageContent2
        this.apppage.config = 'xxxx'
        this.apppage.enabled = 'true'
        this.apppage.sort = 100
        this.apppage.remark = '备注内容xxxxx'
        add(this.apppage).then(res => {
          this.$notify({
            title: '保存成功',
            type: 'success',
            duration: 2500
          })
        }).catch(err => {
          console.log(err.response.data.message)
        })
      },
      clearLayoutPage(e) {
        e.preventDefault()
        $('.mcontent').empty()
        this.$notify({
          title: '清除成功',
          type: 'success',
          duration: 1500
        })
      },
      previewLayoutHtml(e) {
        // 先清空再加载
        this.clearLayoutPage(e)
        this._getDynamicContent(this.pageContent2)
        this._sortRender()
        this.$message('预览模式')
      },
      addLayoutHtml(e) {
        // 先清空再加载
        this.clearLayoutPage(e)
        // 从后台读取预览区域内容
        this.apppage = {
          id: 1,
          page: 0,
          size: 9999
        }
        get(this.apppage).then(res => {
          console.log('=============返回预览内容==============')
          this._getDynamicContent(res.content[0].content)
          this._sortRender()
        }).catch(err => {
          console.log(err.response)
        })
        // 测试内容
        // this._getDynamicContent(this.pageContent1)
        // this._sortRender()
      },
      // 渲染组件动态绑定
      _sortRender() {
        const self = this
        $('.demo, .demo .column').sortable({
          connectWith: '.demo', // 只能放在.demo区域内，若布局嵌套设置为.column
          opacity: 0.35,
          handle: '.drag',
          accept: '.demo'
        })
        $('.sidebar-nav .lyrow').draggable({
          connectToSortable: '.demo',
          helper: 'clone',
          handle: '.drag',
          drag: function(e, t) {
            t.helper.width(400)
          },
          stop: function(event, ui) {
            // 设置嵌套
          }
        })
        $('.demo .column').sortable({
          opacity: 0.35,
          connectWith: '.column',
          stop: function(event, ui) {
            const curModuleObj = ui.item
            const state = curModuleObj.attr('renderstate')
            // 只处理新未进行渲染的新组件
            if (state === 'C') {
              const str = '' + self.$uuid.create()
              const reg = new RegExp('-', 'g')
              const newstr = str.replace(reg, '')
              // 创建临时组件id
              const tmpComponentId = 'C' + newstr
              // 获取组件类型
              const moduleType = curModuleObj.find('.cus_component').attr('type')
              curModuleObj.find('.cus_component').attr('id', tmpComponentId)
              self.$nextTick(function() {
                const strs = `<${moduleType} ref="${tmpComponentId}"></${moduleType}>`
                const MyComponent = Vue.extend({
                  mounted: function() {
                    if (this.$refs[tmpComponentId]) {
                      // 向windows注册组件对象
                      const componentUid = 'C' + this.$refs[tmpComponentId]._uid
                      // window[cusComponentId] = this.$refs[cusComponentId]
                      window[componentUid] = this.$refs[tmpComponentId]
                    }
                  },
                  updated: function() {
                    // 异步加载组件，初次触发updated事件
                    if (this.$refs[tmpComponentId]) {
                      const componentUid = 'C' + this.$refs[tmpComponentId]._uid
                      // window[cusComponentId] = this.$refs[cusComponentId];
                      window[componentUid] = this.$refs[tmpComponentId]
                    }
                  },
                  template: strs
                })
                new MyComponent().$mount('#' + tmpComponentId)
                // 挂载后渲染状态设置为O 旧组件状态
                curModuleObj.attr('renderstate', 'O')
              })
            }
          }
        })
      },
      // 组装动态内容区域内容
      _getDynamicContent(pageContent) {
        // 利用模板方法组装成动态编辑内容
        const htmlContent = `<div class="lyrow ui-draggable" style="display: block;"><div class="row clearfix"><div class="col-md-12 column ui-sortable mcontent">${pageContent}</div></div></div>`
        // 动态加载页面到手机区域
        var PageComponent = Vue.extend({
          template: htmlContent
        })
        new PageComponent().$mount('#mount-point')
        this.$message('编辑模式')
      },
      // 控制控件编辑框的显示与否
      showEditDialog(val) {
        this.openTheme = val
      }
    }
  }
</script>
<style type="text/scss" rel="stylesheet/scss" lang="scss">
  .btn-wrapper {
    position: absolute;
    top: 12px;
    left: 781px;
    width: 100%;
  }

  /*修改编辑器左侧样式*/
  /* .sidebar-nav {
     width: 240px;
     height: 100%;
     top: 0px;
   }*/
</style>
