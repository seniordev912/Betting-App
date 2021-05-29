<!DOCTYPE html>
<html>
<head>
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
    <style type='text/css' rel='stylesheet' media='all'>
        body {
            background: #d8d8d8;
            padding: 10px;
        }
        .logo {
            padding-top: 30px;
            padding-left: 10px;
            max-width: 230px;
            width: 50%;
            margin: auto;
        }
        .content {
            background: #efefef;
            padding-left: 30px;
            padding-right: 30px;
            padding-bottom: 30px;
            border-radius: 20px;
            text-align: center;
        }
        .content div {
            line-height: 1.3;
        }
        .block {
            margin-top: 25px;
        }
        .button {
            background: #6fadef;
            border-radius: 25px;
            width: 150px;
            height: 40px;
            font-size: 1.rem;
        }
    </style>
</head>
<body>
<div class='content'>
    <div class='block' >
            <span>
                <a href = '{{$url}}'>
                    <button class='button'>Kliknij tutaj, aby aktywować konto</button>
                </a>
            </span>
    </div>
</div>
</body>
</html>
