<?php

$message = $_POST['text'];

file_put_contents('chat.txt', "$message\n");
