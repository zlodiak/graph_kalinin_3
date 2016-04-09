<!DOCTYPE html>

<html lang="ru">
  <head>
    <?php require('head.php'); ?>
  </head>

  <body>
    <div class="container main-container">
      <?php require('nav.php'); ?>

      <div class="content-container" id="contentContainer">
        <div class="list-group graphs" id="graphsList">
          <button type="button" class="btn btn-default btn-add pull-right" aria-label="Left Align" data-toggle="modal" data-target="#addGraph">
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </button>                                        
        </div>
      </div>
    </div>

    <?php require('templates.php'); ?>

    <?php require('modals.php'); ?>

    <?php require('scripts.php'); ?>
  </body>
</html>
