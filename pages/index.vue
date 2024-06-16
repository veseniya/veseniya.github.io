<style>
.image {
    grid-area: img;
}

.history {
    grid-area: history;
    background: #00BFFF;
}

.services {
    grid-area: services;
    background-color: #2F4F4F;
}

.training {
    grid-area: training;
    background-color: #00CED1;
}

.oeuvre {
    grid-area: oeuvre;
    background-color: #b2eff0;
}

.content-wrapper {

    display: grid;
    gap: 2px;
    grid-template-areas:
        "img"
        "history"
        "services"
        "training"
        "oeuvre";
    grid-template-rows: 100vh 100vh 100vh 100vh 100vh
}
</style>

<template>
    <div class="content-wrapper">
        <MainImage class="image" />
        <div class="history">HISTORY</div>
        <MainServices class="services" />
        <div class="training">TRAINING</div>
        <div class="oeuvre">OEUVRE</div>
    </div>
</template>
