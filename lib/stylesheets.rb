def stylesheets
    if @item[:stylesheets].nil?
        ''
    else
        output = []
        for s in @item[:stylesheets]
            path = "/css/#{s}.css"
            output << %{<link rel="stylesheet" href="#{path}" media="screen, projection" />}
        end
        output.join("\n")
    end
end
