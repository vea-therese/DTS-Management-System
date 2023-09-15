$("#addRow").click(function () {
    var html = '';
    html += '<div id="productRow" class="row reqCard justify-content-between">';
    html += '<div class="col-sm-12 col-md-2 col-lg-2">';
    html += '<input class="form-control" type="number" min="1" placeholder="Quantity" required>';
    html += '</div>';
    html += '<div class="col-sm-12 col-md-2 col-lg-2">';
    html += '<select class="form-select" aria-label="Default select example" required>';
    html += '<option selected disabled>Unit</option>';
    html += '<option value="1">PCS</option>';
    html += '<option value="2">EA</option>';
    html += '<option value="3">UNT</option>';
    html += '<option value="3">SETS</option>';
    html += '</select>';
    html += '</div>';
    html += '<div class="col-sm-12 col-md-6 col-lg-6">';
    html += '<textarea class="form-control" placeholder="Description" required></textarea>';
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