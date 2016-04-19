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
    <a class="graph_title" href="#<%= title %>" id="graphTitle_<%= cid %>"><%= title %></a>
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

<script type="text/template" id="page3Template">
  <div class="page3">
    page 3 
    <a href="#page5">page5</a>
  </div>
</script>

<script type="text/template" id="page4Template">
  <div class="page4">
    page 4
  </div>
</script>

<script type="text/template" id="page5Template">
  <div class="page5">
    page 5
  </div>
</script>

<script type="text/template" id="graphTemplate">
  <div class="graph">
    graph: <%= graph_id %>
  </div>
</script>


<script type="text/template" id="error404Template">
  <div class="error404">
    error404
  </div>
</script>
