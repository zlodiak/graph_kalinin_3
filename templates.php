<script type="text/template" id="navbarTemplate">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#index">graphKalinin</a>
    </div>
    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav" id='navbarMebu'>
        <li class="active punktPrimary" data-punkt="index"><a href="#index">index</a></li>
        <li class="punktPrimary" data-punkt="graph"><a class="add_dot_button" id="addDotButton" href="#" data-toggle="modal" data-target="#addDot">Добавить точку</a></li>
        <li class="punktPrimary"data-punkt="page1"><a href="#page1">page1</a></li>
        <li class="punktPrimary"data-punkt="page2"><a href="#page2">page2</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li class="active"><a href="./">Default <span class="sr-only">(current)</span></a></li>
        <li><a href="../navbar-static-top/">Static top</a></li>
        <li><a href="../navbar-fixed-top/">Fixed top</a></li>
      </ul>
    </div>
  </div>
</script>

<script type="text/template" id="addGraphFieldTemplate">
  <p>
    <label for="fld_<%= field %>"><%= field %></label>
    <input class="form-control" id="fld_<%= field %>" name="fld_<%= field %>" type="text">
  </p>
</script>

<script type="text/template" id="addGraphModalTemplate">
  <!-- Modal add graph -->
  <div class="modal fade" id="addGraphModal" tabindex="-1" role="dialog" aria-labelledby="addGraphLabel">
    <div class="modal-dialog" role="document">     
      <div class="modal-content">
        <form class="" id="addGraphForm" method="get" action="#" onSubmit="return false;">
          <fieldset>         
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="addGraphLabel">Добавить график</h4>
            </div>

            <div class="modal-body" id="addGraphModalFields">
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
              <button type="submit" class="btn btn-primary submit" value="Submit" id="createGraphSubmit">Добавить</button>
            </div>
          </fieldset>
        </form>          
      </div>
    </div>
  </div>
</script>

<script type="text/template" id="graphsListItemTemplate">
  <input class="edit_field hide" type="text" value="<%= title %>" />

  <div class="display_block">
    <a class="graph_title" href="#graph/<%= cid %>" id="graphTitle_<%= cid %>"><%= title %></a>
    <div class="action glyphicon glyphicon-remove pull-right"></div>
    <div class="action glyphicon glyphicon-edit pull-right"></div>  
  </div>
</script>

<script type="text/template" id="graphsListTemplate">
  <button type="button" class="btn btn-default btn-add pull-right" aria-label="Left Align" data-toggle="modal" data-target="#addGraphModal">
    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
  </button>         
</script>

<script type="text/template" id="indexTemplate">
  <div class="index" id="indexPage">
     index page
  </div>
</script>

<script type="text/template" id="page1Template">
  <div class="page1">
    page 1
  </div>
</script>

<script type="text/template" id="page2Template">
  <div class="page2">
    page 2
  </div>
</script>

<script type="text/template" id="graphTemplate">
  <div class="graph">
    <canvas class="canvas_graph" id="canvasGraph"></canvas>

    graph: <%= title %>
    graph: <%= id %>
  </div>
</script>


<script type="text/template" id="error404Template">
  <div class="error404">
    error404
  </div>
</script>
