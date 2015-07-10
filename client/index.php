<?php
/**
 * @file
 * If user agent match the given regex, redirect to Drupal.
 */

if (preg_match('/baiduspider|facebookexternalhit|twitterbot|rogerbot|linkedinbot|slackbot/', $_SERVER['HTTP_USER_AGENT'])) {

  define('BACKEND_URL', 'http://manati.tk');
  if ($_SERVER['REQUEST_URI'] == '/') {
    echo file_get_contents(BACKEND_URL);
  }
  else {
    preg_match('/\d+$/', $_SERVER['REQUEST_URI'], $id_array);
    if (isset($id_array[0])) {
      echo file_get_contents(BACKEND_URL . '/node/' . $id_array[0]);
    }
  }
}
else {
  echo file_get_contents('index.html');
}

?>
