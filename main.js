function preload()
{

}

function setup()
{
    canvas = createCanvas(500, 380);
    canvas.position(110, 250);
    Video = createCapture(VIDEO);
    Video.hide();

    tint_color = "";
}

function draw()
{
    image(Video,50,50,400,300);
    tint(tint_color);
    ellipse(56, 46, 55, 55);
    ellipse(440, 50, 55, 55);
    ellipse(440, 345, 55, 55);
    ellipse(56, 345, 55, 55);
}

function take_snapshot()
{
    save('disco.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}
