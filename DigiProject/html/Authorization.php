<?php

$Username = $_GET['username'];
$Password = $_GET['password'];

$url = 'https://dglearn.talentlms.com/api/v1/userlogin';
$api_key = 'xwccIRP8Gtl1b1hBQVL8AHhMhGalHn';


$data = [
    'login' => $Username,
    'password' => $Password,
    'logout_redirect' => 'https://dglearn.talentlms.com/dashboard',
];

$payload = json_encode($data);

$headers = [
    'Authorization: Basic YVhNM0l4OEdrSGh6eTNJN2dKNWpJSnpxWUNmM1d0Og==',
    'Content-Type: application/json',
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

curl_exec($ch);

if (curl_errno($ch)) {
    echo 'Error: ' . curl_error($ch);
}

curl_close($ch);

?>
