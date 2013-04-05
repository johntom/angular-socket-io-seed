p

               #inside

               #header


                   input.search-query(style='width`:100px', type='text', ng-model='filteringText', placeholder='Filter')

                     span(style='color:white;font-weight:bold')
                         &nbsp;&nbsp;&nbsp;&nbsp;User:&nbsp;
                         span #{username}

               #main-content

               body( layout, state='bodyState', ng-init='bodyState = true')
                span(style='color:white;font-weight:bold')
                 .ui-layout-north
                    | angular-1.0.5
                    button(ng-click='bodyState = !bodyState') Toggle bodyState
                    | {{bodyState}}
                    .ui-layout-west
                        | West
                    .ui-layout-center
                        | Center

                    .ui-layout-east
                        | East
                    .ui-layout-south
                        | South

