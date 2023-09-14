<?php
// TODO: getConnection(), isLog(), logUser($username,$password);

function isLog(): bool
{
    if (isset($_SESSION["userEmail"]))

        return true;
    return false;
}
