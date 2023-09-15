$("#addRow").click(function () {
    var html = '';
    html += '<div id="productRow" class="row reqCard justify-content-between">';
    html += '<div class="col-sm-12 col-md-8 col-lg-8">';
    html += '<textarea class="form-control" placeholder="Product" required></textarea>';
    html += '</div>';
    html += '<div class="col-sm-12 col-md-2 col-lg-2">';
    html += '<input class="form-control" type="number" min="1" placeholder="Amount" required>';
    html += '</div>';
    html += '<div class="col-sm-12 col-md-2 col-lg-2">';
    html += '<i id="removeRow" class="fa fa-minus-square" aria-hidden="true"></i>';
    html += '</div>';
    html += '</div>';
  
    $('#newProductRow').append(html);
  });
  
  // remove row
  $(document).on('click', '#removeRow', function () {
    $(this).closest('#productRow').remove();
  });