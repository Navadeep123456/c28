class Slingshot {
constructor (body1,cordinate){
var option = {
    bodyA:body1,
    pointB:cordinate,
    stiffeness:0.04,
    length:15
}
this.sling = Constraint.create(option)
World.add(world,this.sling)

}

fly(){
this.sling.bodyA = null


}

display(){

if(this.sling.bodyA)
{var start = this.sling.bodyA.position
    var end = this.sling.pointB
    strokeWeight(4)
    line(start.x,start.y,end.x,end.y)

}

}

}
