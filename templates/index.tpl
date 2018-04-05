<!DOCTYPE html>
<html class="no-js" lang="en"> <!--<![endif]-->
<head>
	{include file="{$DOC_ROOT}/templates/1-default-meta.tpl"}
	{include file="{$DOC_ROOT}/templates/2-default-css.tpl"}
</head>

<body class="tersus-style-05"">
<!-- PRELOADER
  		==================================================================== !-->
<!-- .preloader //begin -->
<div class="preloader">
    <div class="preloader-container">
        <div class="sk-folding-cube">
            <div class="sk-cube1 sk-cube"></div>
            <div class="sk-cube2 sk-cube"></div>
            <div class="sk-cube4 sk-cube"></div>
            <div class="sk-cube3 sk-cube"></div>
        </div>
    </div>
</div>
<!-- .preloader //end -->
      {include file="{$DOC_ROOT}/templates/header.tpl"}
      {include file="{$DOC_ROOT}/templates/{$page}.tpl"}
      {include file="{$DOC_ROOT}/templates/footer.tpl"}
{include file="{$DOC_ROOT}/templates/3-default-js.tpl"}
</body>
</html>