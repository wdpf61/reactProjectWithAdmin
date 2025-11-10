<?php
// echo Page::title(["title"=>"Manage Stock"]);
// echo Page::body_open();
// echo Page::context_open();
// $page = isset($_GET["page"]) ?$_GET["page"]:1;
// // echo Stock::html_table($page,10);
// echo Page::context_close();
// echo Page::body_close();
?>

<form action="<?=$base_url?>/stock" method="post">
  <label for="">From</label>
  <input type="date" name="from">
  <label for="">To</label>
  <input type="date" name="to">
  <button type="submit" name="btn_submit">Submit</button>
</form>



<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Product</th>
      <th scope="col">qty</th>
      
    </tr>
  </thead>
  <tbody>
    <?php
       

        foreach ($stock as $key => $value) {
          echo "
          
               <tr>
      
                <td>$key</td>
                <td>$value->product</td>
                <td>$value->qty</td>
            
                </tr>
          
          
          ";
        }
    ?>
   
  </tbody>
</table>
