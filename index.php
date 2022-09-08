<?php

require 'header.php';
?>
<link rel="stylesheet" href="css/exercise.css">

<main>
    <div class="top">
        <div class="top-left">

            <h1>
                <-- Exercise name</h1>
        </div>
        <div class="top-right">
            <div class="clock"></div>
            <button id="help" class="need-help">I need help</button>
            <button class="inleveren">Inleveren</button>

        </div>

    </div>
    <div class="exercise-container">
        <div class="exercise-info">
            <!-- links van de exercise met algemene info -->
        </div>
        <div class="exercise">
            <!-- de exercise -->
        </div>

    </div>
    <?php
    require 'popup.php';
    ?>
</main>
<?php
require 'footer.php';
?>