<script type="text/template" id="addGraphFieldTemplate">
  <p>
    <label for="title">111</label>
    <input class="form-control" id="222" name="222" type="text">
  </p>
</script>

<script type="text/template" id="addGraphTemplate">
  <!-- Modal add graph-->
  <div class="modal fade" id="addGraphModal" tabindex="-1" role="dialog" aria-labelledby="addGraphLabel">
    <div class="modal-dialog" role="document">     
      <div class="modal-content">
        <form class="" id="addGraphForm" method="get" action="#" onSubmit="return false;">
          <fieldset>         
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="addGraphLabel">Добавить график</h4>
            </div>

            <div class="modal-body">
              <p>
                <label for="title">Название</label>
                <input class="form-control" id="title" name="title" type="text">
              </p>
              <p>
                <label for="y_max">y_max</label>
                <input class="form-control" id="y_max" name="y_max" type="number" rangelength="[1,3]" value="100">
              </p>
              <p>
                <label for="y_min">y_min</label>
                <input class="form-control" id="y_min" name="y_min" type="number" rangelength="[1,3]" value="0">
              </p>
              <p>
                <label for="y_period">y_period</label>
                <input class="form-control" id="y_period" name="y_period" type="number" rangelength="[1,3]" value="10">
              </p>
              <p>
                <label for="x_max">x_max</label>
                <input class="form-control" id="x_max" name="x_max" type="number" rangelength="[1,3]" value="100">
              </p>
              <p>
                <label for="x_min">x_min</label>
                <input class="form-control" id="x_min" name="x_min" type="number" rangelength="[1,3]" value="0">
              </p>
              <p>
                <label for="x_period">x_period</label>
                <input class="form-control" id="x_period" name="x_period" type="number" rangelength="[1,3]" value="10">
              </p>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
              <button type="submit" class="btn btn-primary submit" value="Submit">Добавить</button>
            </div>
          </fieldset>
        </form>          
      </div>
    </div>
  </div>
</script>

<script type="text/template" id="index">
  <div class="index">
    <div class="list-group graphs" id="graphsList">
      <button type="button" class="btn btn-default btn-add pull-right" aria-label="Left Align" data-toggle="modal" data-target="#addGraphModal">
        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
      </button>      
    </div>      
  </div>
</script>

<script type="text/template" id="page1">
  <div class="page1">
    page 1
  </div>
</script>

<script type="text/template" id="page2">
  <div class="page2">
    page 2
  </div>
</script>

<script type="text/template" id="page3">
  <div class="page3">
    page 3
  </div>
</script>

<script type="text/template" id="page4">
  <div class="page4">
    page 4
  </div>
</script>

<script type="text/template" id="page5">
  <div class="page5">
    page 5
  </div>
</script>
