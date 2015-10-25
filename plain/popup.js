/**
 * Created by Daniel on 24/10/15.
 */

/**
 * <a href="http://something.com" onclick="return confirmAction()">try to click, I dare you</a>
 * replacement: http://t4t5.github.io/sweetalert/
 */
function confirmAction(){
  var confirmed = confirm("Are you sure? This will remove this entry forever.");
  return confirmed;
}
